import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AbonosVentas } from "src/abonos/abonoventas/abonoventas.entity";
import { Llamadas } from "./llamadas.entity";
import { createLlamadasDto } from "./dto/llamadas.dto";


@Injectable()
export class LlamadasService {
constructor(
	@InjectRepository(Llamadas) private llamadasRepository: Repository<Llamadas>,
    ) {}



	async getLlamadas () {
		const llamadas = await this.llamadasRepository.find()

		return { data : llamadas , status : HttpStatus.OK}
	}

  async createLlamada (llamada:createLlamadasDto){
	const newFlag = {...llamada , fhcreacion : new Date()}

	const newItem = await this.llamadasRepository.create({...newFlag})

	const Saved = await this.llamadasRepository.save({...newItem})

	return { data: Saved , status : HttpStatus.OK}


  }
}