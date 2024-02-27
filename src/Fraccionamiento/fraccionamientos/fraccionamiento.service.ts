import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fraccionamientos } from "./fraccionamientos.entity";
import { Repository } from "typeorm";

import { CreateFraccionamientoDto } from "./dto/fraccionamiento.dto";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { CreateEstadoCuentaFraccionamientoDto } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/dto/estadocuentafraccionamiento.dto";
import {  CreateEgresosFraccionamientoDto } from "src/Egresoss/egresosfraccionamiento/dto/egresosfraccionamiento.dto";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";



@Injectable()
export class FraccionamientoService {
	constructor(
	@InjectRepository(Fraccionamientos) private fraccionamientosRepository: Repository<Fraccionamientos>, 
	@InjectRepository(EgresosFraccionamiento) private egresosFraccionamientosRepository: Repository<EgresosFraccionamiento>, 
  @InjectRepository(EstadoCuentaFraccionamiento) private estadoCuentaFraccionamientoRepository : Repository<EstadoCuentaFraccionamiento>, 	) {}
	
	
	
	async getFraccionamientos() {
	const items = await this.fraccionamientosRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getFraccionamientoById(id: number) {
    const Found = await this.fraccionamientosRepository.findOne({
      where: { id }, relations: ["Manzanas", "Lotes"]
    });
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Fraccionamiento not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    const totaldemanzanas = Found.Manzanas.length
    const totaldelotes  = Found.Lotes.length

    const Flag =  {...Found, totaldelotes , totaldemanzanas}
    await this.fraccionamientosRepository.save(Flag)
    const Fraccionamiento = await this.fraccionamientosRepository.findOne({
      where: { id }, relations: {Manzanas:{Lotes:true}}
    });
    
  /*   Found.totaldelotes = totaldelotes */
    return Fraccionamiento;
  }

  async createFraccionamiento(fraccionamiento: CreateFraccionamientoDto ){

	const newFlag = { ...fraccionamiento, fhcreacion: new Date()}
	
  const newItem = await this.fraccionamientosRepository.create({...newFlag})
	const Saved = await this.fraccionamientosRepository.save({...newItem})

      const estadocuenta:CreateEstadoCuentaFraccionamientoDto = {
        id: fraccionamiento.id,
        fraccionamientoId: fraccionamiento.id,
        montoingreso: 0,
        montoegreso: 0,
        cuentasaldo: 0,
      }
      await this.estadoCuentaFraccionamientoRepository.create({...estadocuenta})
      await this.estadoCuentaFraccionamientoRepository.save({...estadocuenta})
      
      
      const newEgresosFracc:CreateEgresosFraccionamientoDto = { 

			  concepto:"Costo del Fraccionamiento",
			  monto: fraccionamiento.costototal, 
			  fraccionamientoId : fraccionamiento.id ,
			  estadocuentafraccionamientoId : fraccionamiento.id,
        fhcreacion: new Date()
		    }
	    await this.createEgresoFraccionamiento({...newEgresosFracc})	
	
          
        return{ data:Saved, status : HttpStatus.OK}

  }

async createEgresoFraccionamiento(egresosfraccionamiento:CreateEgresosFraccionamientoDto) {

	
		const newItem = await this.egresosFraccionamientosRepository.create({...egresosfraccionamiento})
		const Saved = await this.egresosFraccionamientosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}



}