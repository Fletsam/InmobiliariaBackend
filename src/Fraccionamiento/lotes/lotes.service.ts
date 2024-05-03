import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Lotes } from "./lotes.entity";
import { CreateLotesDto } from "./dto/lotes.dto";

import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";



@Injectable()
export class LotesService {
	constructor(
	@InjectRepository(Lotes) private lotesRepository: Repository<Lotes>,
  @InjectRepository(Fraccionamientos) private fraccionamientoRepository: Repository<Fraccionamientos>,
   @InjectRepository(Manzanas) private manzanasRepository: Repository<Manzanas>,
   @InjectRepository(Contratos) private contratosRepository: Repository<Contratos>,
  ) {}
	
	
	async getAllLotes() {
	const lotes = await this.lotesRepository.find()  
	return {data : lotes, status: HttpStatus.OK }
	}
	async getAllLotesDisponibles() {
	const lotes = await this.lotesRepository.find()
    const disponibles = lotes.filter((item)=> item.contratoId == 0)
	return {data : disponibles, status: HttpStatus.OK }
	}
	async getAllLotesVendidos() {
	const lotes = await this.lotesRepository.find()
    const vendidos = lotes.filter((item)=> item.contratoId !== 0)
	return {data : vendidos, status: HttpStatus.OK }
	}


	async getLotesDisponibles(id:number) {
	const lotes = await this.lotesRepository.find()
  const fracc = await this.fraccionamientoRepository.findOne({where:{id}})

  const lotesfracc = lotes.filter((item) => item.fraccionamientoId === fracc.id)
    const disponibles = lotesfracc.filter((item)=> item.contratoId == 0)
    
	return {data : disponibles, status: HttpStatus.OK }
	}
 
	async getLoteById(id: number) {
    const Found = await this.lotesRepository.findOne({
      where: { id }
    });
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Manzana not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return Found;
  }

  async createLote(lote: CreateLotesDto ){
    const fracc=  await this.fraccionamientoRepository.findOne({where:{id : lote.fraccionamientoId}, relations:["Lotes"]})
    const manzana=  await this.manzanasRepository.findOne({where:{id : lote.manzanaId}})

    if (fracc.usuarioId !== lote.usuarioId && !manzana) {
       throw new BadRequestException({
        data: null,
        message: 'No tienes permiso',
        status: HttpStatus.NOT_FOUND,
      });
    }
  
	const newFlag = { ...lote, fhcreacion: new Date(), clave:`${manzana.clave}${lote.numero}`}
	const newItem = await this.lotesRepository.create({...newFlag})
	const Saved = await this.lotesRepository.save({...newItem})

	return { data:Saved, status : HttpStatus.OK}
  }

 /* async getTotalMonto (id:number) {

     const foundTotal = await this.manzanasRepository.findOne({where:{id}}) 
      const FoundMonto = await this.lotesRepository.find({ 
    where: { manzanaId: foundTotal.id} })
  
    const totalMontos = FoundMonto.reduce((total,monto) => total + monto.costo , 0 )
    foundTotal.costototal = totalMontos 
      
    console.log(totalMontos);
    
   return this.manzanasRepository.save(foundTotal)  
  } */
/* 
async getTotalMontoFracc (id:number) {
  
     const foundTotal = await this.fraccionamientoRepository.findOne({where:{id}}) 
      const FoundMonto = await this.lotesRepository.find({ 
    where: { fraccionamientoId: foundTotal.id}
  })
  
    const totalMontos = FoundMonto.reduce((total,monto) => total + monto.costo , 0 )
    foundTotal.costototal = totalMontos 
      
   return this.fraccionamientoRepository.save(foundTotal)  
  } */

 async deleteLote(id: number ){
	await this.lotesRepository.delete(id)

	return{  status : HttpStatus.OK}
  }  

}