import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Lotes } from "./lotes.entity";
import { CreateLotesDto } from "./dto/lotes.dto";

import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";
import { Manzanas } from "../manzana/manzanas.entity";



@Injectable()
export class LotesService {
	constructor(
	@InjectRepository(Lotes) private lotesRepository: Repository<Lotes>,
  @InjectRepository(Fraccionamientos) private fraccionamientoRepository: Repository<Fraccionamientos>,
   @InjectRepository(Manzanas) private manzanasRepository: Repository<Manzanas>,
  ) {}
	
	
	
	async getLotes() {
	const items = await this.lotesRepository.find()
  
	return {data : items, status: HttpStatus.OK }
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
    const fracc=  await this.fraccionamientoRepository.findOne({where:{id : lote.fraccionamientoId}})
    const manzana=  await this.manzanasRepository.findOne({where:{id : lote.manzanaId}})

	const newFlag = { ...lote, fhcreacion: new Date(), clave:`${fracc.clave}${manzana.numero}${lote.numero}`}
	const newItem = await this.lotesRepository.create({...newFlag})
	const Saved = await this.lotesRepository.save({...newItem})


	await this.getTotalMonto(Saved.manzanaId)
	await this.getTotalMontoFracc(Saved.fraccionamientoId)
	return { data:Saved, status : HttpStatus.OK}
  }

 async getTotalMonto (id:number) {
   /*  const abonos = await this.abonoRepository.find() */
     const foundTotal = await this.manzanasRepository.findOne({where:{id}}) 
      const FoundMonto = await this.lotesRepository.find({ 
    where: { manzanaId: foundTotal.id} })
  
    const totalMontos = FoundMonto.reduce((total,monto) => total + monto.costo , 0 )
    foundTotal.costototal = totalMontos 
      
    console.log(totalMontos);
    
   return this.manzanasRepository.save(foundTotal)  
  }

async getTotalMontoFracc (id:number) {
   /*  const abonos = await this.abonoRepository.find() */
     const foundTotal = await this.fraccionamientoRepository.findOne({where:{id}}) 
      const FoundMonto = await this.lotesRepository.find({ 
    where: { fraccionamientoId: foundTotal.id}
  })
  
    const totalMontos = FoundMonto.reduce((total,monto) => total + monto.costo , 0 )
    foundTotal.costototal = totalMontos 
      
   return this.fraccionamientoRepository.save(foundTotal)  
  }


}