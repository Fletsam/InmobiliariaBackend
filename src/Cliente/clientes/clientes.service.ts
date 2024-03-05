import { InjectRepository } from "@nestjs/typeorm";
import { Clientes } from "./clientes.entity";
import { Repository } from "typeorm";
import { BadRequestException, HttpStatus } from "@nestjs/common";
import { CreateClientesDto } from "./dto/clientes.dto";
import { UpdatedClientesDto } from "./dto/updatedCliente.dto";
import { Usuarios } from "src/usuarios/usuarios.entity";

export class ClientesService {

	constructor(
	@InjectRepository(Clientes) private clientesRepository: Repository<Clientes>,
	@InjectRepository(Usuarios) private usuariosRepository: Repository<Usuarios>,
  
  ) {}
	
	
	
	async getClientes() {
	const items = await this.clientesRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
	

  
  async getClientesbyUsuario(id: number) {

    const Found = await this.usuariosRepository.findOne({where:{id}})
    const allclientes = await this.getClientes()
    
    const clientes =  allclientes.data.filter((clientes)=> clientes.usuarioId == Found.id)
    
     if (!clientes.length) {
      throw new BadRequestException({
        data: null,
        message: 'Clientes not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
     return clientes;
  }
 
	async getClienteById(id: number) {
    
    const Found = await this.clientesRepository.findOne({
      where: { id },/*  relations: ["Lotes"] */
    });

    const usuario = await this.usuariosRepository.findOne({where:{id:Found.usuarioId}})

    console.log(usuario.id);
    console.log(Found.usuarioId);
    

    if (usuario.id !== Found.usuarioId) {
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

async deleteCliente(id: number ){
	await this.clientesRepository.delete(id)

	return{  status : HttpStatus.OK}
  }



  async editCliente(cliente: UpdatedClientesDto, id:number ){
    await this.getClienteById(id)
	const newFlag = { ...cliente, fhmodificacion: new Date()  }
	const updatedItem = await this.clientesRepository.update({id} , {...newFlag})
	
  if (updatedItem.affected === 0) {
      throw new BadRequestException({
        data: null,
        message: 'No se ha podido actualizar el usuario',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }

	return{ data:newFlag, status : HttpStatus.OK}
  }


}