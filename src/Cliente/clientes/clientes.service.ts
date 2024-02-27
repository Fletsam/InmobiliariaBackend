import { InjectRepository } from "@nestjs/typeorm";
import { Clientes } from "./clientes.entity";
import { Repository } from "typeorm";
import { BadRequestException, HttpStatus } from "@nestjs/common";
import { CreateClientesDto } from "./dto/clientes.dto";

export class ClientesService {

	constructor(
	@InjectRepository(Clientes) private clientesRepository: Repository<Clientes>, 	) {}
	
	
	
	async getClientes() {
	const items = await this.clientesRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getClienteById(id: number) {
    const Found = await this.clientesRepository.findOne({
      where: { id },/*  relations: ["Lotes"] */
    });
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Cliente not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return Found;
  }

  async createCliente(cliente: CreateClientesDto ){

	const newFlag = { ...cliente, fhcreacion: new Date(), fhmodificacion: new Date()  }
	const newItem = await this.clientesRepository.create({...newFlag})
	const Saved = await this.clientesRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }


}