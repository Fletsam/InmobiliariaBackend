import { BadRequestException, Controller, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { Repository } from "typeorm";
import { CreatAbonoDto } from "./dto/abono.dto";

@Injectable()

export class AbonoService {

	constructor(
		@InjectRepository(Abono) private abonoRepository: Repository<Abono>	) {}

	async getAbonos() {
	const abonos = await this.abonoRepository.find()
	return {data : abonos, status: HttpStatus.OK }
}

	async findOne(id: number) {
    const AbonoFound = await this.abonoRepository.findOne({
      where: { id },
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Session not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound;
  }

  async createAbono(abono: CreatAbonoDto){

	const newAbonoFlag = { ...abono, fhcreacion: new Date()}

	const newAbono = await this.abonoRepository.create(newAbonoFlag)
	const AbonoSaved = await this.abonoRepository.save(newAbono)

	return{ data:AbonoSaved, status : HttpStatus.OK}
  }



	}	

