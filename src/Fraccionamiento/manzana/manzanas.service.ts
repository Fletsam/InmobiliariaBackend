import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  Manzanas } from "./manzanas.entity";
import { Repository } from "typeorm";
import {  CreateManzanaDto } from "./dto/manzanas.dto";




@Injectable()
export class ManzanasService {
	constructor(
	@InjectRepository(Manzanas) private manzanasRepository: Repository<Manzanas>,	) {}
	
	
	
	async getManzanas() {
	const items = await this.manzanasRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getManzanaById(id: number) {
    const Found = await this.manzanasRepository.findOne({
      where: { id }, relations : ['Lotes']
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

  async createManzana(manzana: CreateManzanaDto ){

	const newFlag = { ...manzana, fhcreacion: new Date()}
	const newItem = await this.manzanasRepository.create({...newFlag})
	const Saved = await this.manzanasRepository.save({...newItem})

	/* await this.getTotalMontoFracc(Saved.fraccionamientoId) */
	return{ data:Saved, status : HttpStatus.OK}
  }






}