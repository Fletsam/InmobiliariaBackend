import { Repository } from "typeorm";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpStatus, Injectable } from "@nestjs/common";
import { Dias } from "./dias.entity";
import { Gerencia } from "../gerencia.entity";
import { createDiasDto } from "./dto/dias.dto";
@Injectable()
export class DiasService {
	constructor(
	@InjectRepository(Gerencia) private gerenciaRepository: Repository<Gerencia>,
	@InjectRepository(Dias) private diasRepository: Repository<Dias>,
	@InjectRepository(AbonosGerencia) private abonosGerenciaRepository: Repository<AbonosGerencia>,
    ) {}



	async createDia(dia: createDiasDto ){


	const newFlag = { ...dia  }
	const newItem = await this.diasRepository.create({...newFlag})
	const Saved = await this.diasRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }
  async getDias(){
		const items  = await this.diasRepository.find({relations: ["AbonosGerencia"]})
		
		return { data: items , status : HttpStatus.OK}
	}

}