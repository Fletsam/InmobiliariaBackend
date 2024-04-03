import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { BadRequestException, HttpStatus } from "@nestjs/common";

import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { Lotes } from "src/Fraccionamiento/lotes/lotes.entity";
import { Proveedores } from "./proveedores.entity";
import { createProveedorDto } from "./dto/proveedor.dto";

export class ProveedorService {

	constructor(
	@InjectRepository(Proveedores) private proveedorRepository: Repository<Proveedores>,
	@InjectRepository(Usuarios) private usuariosRepository: Repository<Usuarios>,
  ) {}
	
	
	
	async getProveedores() {
	const items = await this.proveedorRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
	
 
	async getProveedorById(id: number) {
    
    const Found = await this.proveedorRepository.findOne({
      where: { id }, relations: ["ContratosProveedores"]
    });
    return Found;
  }

  async createProveedor(proveedor: createProveedorDto ){

	const newFlag = { ...proveedor, fhcreacion: new Date(), fhmodificacion: new Date()  }
	const newItem = await this.proveedorRepository.create({...newFlag})
	const Saved = await this.proveedorRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }

async deleteProveedor(id: number ){
	await this.proveedorRepository.delete(id)

	return{  status : HttpStatus.OK}
  }



 /*  async editCliente(proveedor, id:number ){
    await this.getClienteById(id)
	const newFlag = { ...cliente, fhmodificacion: new Date()  }
	const updatedItem = await this.proveedorRepository.update({id} , {...newFlag})
	
  if (updatedItem.affected === 0) {
      throw new BadRequestException({
        data: null,
        message: 'No se ha podido actualizar el usuario',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }

	return{ data:newFlag, status : HttpStatus.OK}
  } */


}