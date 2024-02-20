import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Privilegios } from "./privilegios.entity";
import { Repository } from "typeorm";
import { CreatePrivilegiosDto } from "./dto/privilegios.dto";



@Injectable()

export class PrivilegiosService {

	constructor(
		@InjectRepository(Privilegios) private privilegiosRepository: Repository<Privilegios>	) {}

	async getPrivilegios() {
	const privilegios = await this.privilegiosRepository.find()
	return {data : privilegios, status: HttpStatus.OK }
}

	async findOne(id: number) {
    const privilegioFound = await this.privilegiosRepository.findOne({
      where: { id },
    });
    if (!privilegioFound) {
      throw new BadRequestException({
        data: null,
        message: 'Session not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return privilegioFound;
  }

  async createUsuario(privilegio: CreatePrivilegiosDto){

	const newPrivilegioFlag = { ...privilegio, fhcreacion: new Date()}

	const newPrivilegio = await this.privilegiosRepository.create(newPrivilegioFlag)
	const privilegioSaved = await this.privilegiosRepository.save(newPrivilegio)

	return{ data:privilegioSaved, status : HttpStatus.OK}
  }



}