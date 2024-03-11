import { InjectRepository } from "@nestjs/typeorm"
import { Funciones } from "./funciones.entity"
import { Repository } from "typeorm"
import { HttpStatus } from "@nestjs/common"
import { CreateFuncionesDto } from "./dto/funciones.dto"

export class FuncionesService {
		constructor(
		@InjectRepository(Funciones) private funcionesRepository: Repository<Funciones>,
  ) {}

  async getFunciones() {
	const items = await this.funcionesRepository.find()
  
	return {data : items, status: HttpStatus.OK }
}
 

async getFuncionbyId(id:number) {
 
  const foundItem = await this.funcionesRepository.findOne({where:{id}}) 

	return {data : foundItem, status: HttpStatus.OK }
}



  async createFuncion(funciones: CreateFuncionesDto){

	const newItemFlag = { ...funciones, fhcreacion: new Date()}
	const newItem = await this.funcionesRepository.create({...newItemFlag})
	const itemSaved = await this.funcionesRepository.save({...newItem})

	return{ data:itemSaved, status : HttpStatus.OK}
  }

  async patchFuncion(funciones: CreateFuncionesDto,id){

	const item = this.funcionesRepository.findOne({where:{id}})
	const newItemFlag = { ...item, estado:true}
	const updatedItem = await this.funcionesRepository.update({id} , {...newItemFlag})
	

	return{ data:updatedItem, status : HttpStatus.OK}
  }

}