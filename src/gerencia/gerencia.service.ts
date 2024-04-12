import { Repository } from "typeorm";
import { Gerencia } from "./gerencia.entity";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpStatus, Injectable } from "@nestjs/common";
import { createGerenciaDto } from "./dto/gerencia.dto";
@Injectable()
export class GerenciaService {
	constructor(
	@InjectRepository(Gerencia) private gerenciaRepository: Repository<Gerencia>,
	@InjectRepository(AbonosGerencia) private abonosGerenciaRepository: Repository<AbonosGerencia>,
    ) {}

	async createGerencia(gerencia: createGerenciaDto ){
		const Gerencia = await this.gerenciaRepository.find()
		
		if(Gerencia.length){
			return "Ya existe una gerencia"
		}
	const newFlag = { ...gerencia  }
	const newItem = await this.gerenciaRepository.create({...newFlag})
	const Saved = await this.gerenciaRepository.save({...newItem})
		
	return{ data:Saved, status : HttpStatus.OK}
  }
  async getGerencia(){
		const items  = await this.gerenciaRepository.find({relations: ["Dias", "AbonosGerencia"]})
		const item = items[items.length - 1];
		return { data: item , status : HttpStatus.OK}
	}

}