import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  Manzanas } from "./manzanas.entity";
import { Repository } from "typeorm";
import {  CreateManzanaDto } from "./dto/manzanas.dto";
import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { throwError } from "rxjs";
import { UpdateManzanaDto } from "./dto/updatemanzanas.dto";
import { CreateLotesDto } from "../lotes/dto/lotes.dto";
import { Lotes } from "../lotes/lotes.entity";




@Injectable()
export class ManzanasService {
	constructor(
	@InjectRepository(Manzanas) private manzanasRepository: Repository<Manzanas>,
	@InjectRepository(Lotes) private lotesRepository: Repository<Lotes>,
  @InjectRepository(Fraccionamientos) private fraccionamientosRepository: Repository<Fraccionamientos>,
  ) {}
	
	
	
	async getManzanas() {
	const items = await this.manzanasRepository.find({relations:[ "fraccionamiento","Lotes"]})
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getManzanaById(id: number) {
    const Found = await this.manzanasRepository.findOne({
      where: { id }, relations : ["fraccionamiento", 'Lotes', 'Lotes.Contrato']
    });

     if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Manzana not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    const items = Found.Lotes.filter(item=> item.estatus)

    const itemValidated = {
      ...Found,
      Lotes : items
    }
   
    return itemValidated;
  }
async getManzanaByUsuario(id: number) {
    const Found = await this.fraccionamientosRepository.findOne({where:{id}})
    const manzana = await this.manzanasRepository.findOne({
      where: { usuarioId: Found.id }
    });

    if (!manzana) {
      throw new BadRequestException({
        data: null,
        message: 'Fraccionamiento not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    
  /*   Found.totaldelotes = totaldelotes */
    return manzana;
  }
  async createManzana(manzana: CreateManzanaDto ){
   const fracc=  await this.fraccionamientosRepository.findOne({where:{id : manzana.fraccionamientoId}})
    if (fracc.usuarioId !== manzana.usuarioId && fracc.id !== manzana.fraccionamientoId ) {
       throw new BadRequestException({
        data: null,
        message: 'No tienes permiso',
        status: HttpStatus.NOT_FOUND,
      });
    }

	const newFlag = { ...manzana, fhcreacion: new Date(), clave:(`${fracc.clave}${manzana.numero}`)}
	const newItem = await this.manzanasRepository.create({...newFlag})
	const Saved = await this.manzanasRepository.save({...newItem})

	/* await this.getTotalMontoFracc(Saved.fraccionamientoId) */
	return{ data:Saved, status : HttpStatus.OK}
  }


  
 async deleteManzana(id: number ){
	await this.manzanasRepository.delete(id)

	return{  status : HttpStatus.OK}
  }  






}