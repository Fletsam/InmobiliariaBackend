import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lotes } from "./lotes.entity";
import { Repository } from "typeorm";
import { CreateLotesDto } from "./dto/lotes.dto";



@Injectable()
export class LotesService {
	constructor(
	@InjectRepository(Lotes) private lotesRepository: Repository<Lotes> 	) {}
	
	
	
	async getLotes() {
	const items = await this.lotesRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getLotesById(id: number) {
    const Found = await this.lotesRepository.findOne({
      where: { id },
    });
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Lote not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return Found;
  }

  async createLote(lote: CreateLotesDto ){

	const newFlag = { ...lote, fhcreacion: new Date()}
	const newItem = await this.lotesRepository.create({...newFlag})
	const Saved = await this.lotesRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }



}