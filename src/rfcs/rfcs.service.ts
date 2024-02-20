import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Rfcs } from "./rfcs.entity";
import { Repository } from "typeorm";
import { CreateRfcsDto } from "./dto/rfcs.dto";
import { Abono } from "src/abonos/abono.entity";
import { UsuariosService } from "src/usuarios/usuarios.service";

@Injectable()
export class RfcsService {


	constructor(
		@InjectRepository(Rfcs) private rfcsRepository: Repository<Rfcs>, private usuarioService: UsuariosService 	) {}

	async getRfcs() {
	const rfcs = await this.rfcsRepository.find(
    {relations: ["Abonos"]}
  )
  
	return {data : rfcs, status: HttpStatus.OK }
}
 

async getRfcsByUsuario(id:number) {
 
  const foundUsuario = await this.usuarioService.findById(id) 
	const Rfcs = await this.rfcsRepository.find({ 
    where: {usuarioId: foundUsuario.id}
  })
  
  
	return {data : Rfcs, status: HttpStatus.OK }
}




	async getRfcById(id: number) {
    const rfcFound = await this.rfcsRepository.findOne({
      where: { id }, relations: ["Abonos"],
    });
    if (!rfcFound) {
      throw new BadRequestException({
        data: null,
        message: 'Rfc not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return rfcFound;
  }

  async createRfc(rfc: CreateRfcsDto , id:number){

	const newRfcFlag = { ...rfc, fhcreacion: new Date()}
	const newRfc = await this.rfcsRepository.create({...newRfcFlag, usuarioId:id})
	const rfcSaved = await this.rfcsRepository.save({...newRfc ,  idcreacion : id})

	return{ data:rfcSaved, status : HttpStatus.OK}
  }




}