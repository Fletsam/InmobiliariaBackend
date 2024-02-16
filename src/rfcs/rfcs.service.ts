import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Rfcs } from "./rfcs.entity";
import { Repository } from "typeorm";
import { CreateRfcsDto } from "./dto/rfcs.dto";

@Injectable()
export class RfcsService {


	constructor(
		@InjectRepository(Rfcs) private rfcsRepository: Repository<Rfcs>	) {}

	async getRfcs() {
	const rfcs = await this.rfcsRepository.find()
	return {data : rfcs, status: HttpStatus.OK }
}

	async findOne(id: number) {
    const rfcFound = await this.rfcsRepository.findOne({
      where: { id },
    });
    if (!rfcFound) {
      throw new BadRequestException({
        data: null,
        message: 'Session not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return rfcFound;
  }

  async createRfc(rfc: CreateRfcsDto){

	const newRfcFlag = { ...rfc, fhcreacion: new Date()}

	const newRfc = await this.rfcsRepository.create(newRfcFlag)
	const rfcSaved = await this.rfcsRepository.save(newRfc)

	return{ data:rfcSaved, status : HttpStatus.OK}
  }




}