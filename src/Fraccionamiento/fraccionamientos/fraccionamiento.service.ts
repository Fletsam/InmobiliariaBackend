import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fraccionamientos } from "./fraccionamientos.entity";
import { Repository } from "typeorm";

import { CreateFraccionamientoDto } from "./dto/fraccionamiento.dto";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { CreateEstadoCuentaFraccionamientoDto } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/dto/estadocuentafraccionamiento.dto";
import {  CreateEgresosFraccionamientoDto } from "src/Egresoss/egresosfraccionamiento/dto/egresosfraccionamiento.dto";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Manzanas } from "../manzana/manzanas.entity";



@Injectable()
export class FraccionamientoService {
	constructor(
	@InjectRepository(Fraccionamientos) private fraccionamientosRepository: Repository<Fraccionamientos>, 
	@InjectRepository(EgresosFraccionamiento) private egresosFraccionamientosRepository: Repository<EgresosFraccionamiento>, 
  @InjectRepository(EstadoCuentaFraccionamiento) private estadoCuentaFraccionamientoRepository : Repository<EstadoCuentaFraccionamiento>,
    @InjectRepository(Usuarios) private usuariosRepository: Repository<Usuarios>,  
  
  ) {}
   
	
	
	
	async getFraccionamientos() {
	const items = await this.fraccionamientosRepository.find({relations: ["Manzanas", "Lotes"]})
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getFraccionamientoById(id: number,id2: number) {
    
    const Found = await this.fraccionamientosRepository.findOne({
      where: { id }, relations: ["Manzanas", "Lotes"]
    });

    const usuario = await this.usuariosRepository.findOne({where:{id:id2}})

    if (Found.usuarioId !== usuario.id) {
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
      where: { id }, relations: ["Manzanas", "Lotes"]
    });
    
  /*   Found.totaldelotes = totaldelotes */
    return Fraccionamiento;
  }

  async getFraccionamientoByUsuario(id: number) {

    const Found = await this.usuariosRepository.findOne({where:{id}})
    const fraccs = await this.getFraccionamientos()
   
    
    const fracc =  fraccs.data.filter((fracc)=> fracc.usuarioId == Found.id)
    
    

     if (!fracc.length) {
      throw new BadRequestException({
        data: null,
        message: 'Fraccionamientos not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
     return fracc;
  }


  async createFraccionamiento(fraccionamiento: CreateFraccionamientoDto ){

	const newFlag = { ...fraccionamiento, fhcreacion: new Date()}
	
  const newItem = await this.fraccionamientosRepository.create({...newFlag})
	const Saved = await this.fraccionamientosRepository.save({...newItem})

      const estadocuenta:CreateEstadoCuentaFraccionamientoDto = {
        id: Saved.id,
        nombre: fraccionamiento.nombre,
        montoingreso: 0,
        montoegreso: 0,
        cuentasaldo: 0,
      }
      await this.estadoCuentaFraccionamientoRepository.create({...estadocuenta})
      await this.estadoCuentaFraccionamientoRepository.save({...estadocuenta})
      
      
      const newEgresosFracc:CreateEgresosFraccionamientoDto = { 

			  concepto:"Costo del Fraccionamiento",
			  monto: fraccionamiento.costototal, 
			  fraccionamientoId : Saved.id ,
			  estadocuentafraccionamientoId : Saved.id,
        fhcreacion: new Date()
		    }
	    await this.createEgresoFraccionamiento({...newEgresosFracc})	
	
          
        return{ data:Saved, status : HttpStatus.OK}

  }


  async deleteFracc(id: number ){
	await this.fraccionamientosRepository.delete(id)

	return{  status : HttpStatus.OK}
  }

async createEgresoFraccionamiento(egresosfraccionamiento:CreateEgresosFraccionamientoDto) {

		const newItem = await this.egresosFraccionamientosRepository.create({...egresosfraccionamiento})
		const Saved = await this.egresosFraccionamientosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}



}