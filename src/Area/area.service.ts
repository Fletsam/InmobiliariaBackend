import { InjectRepository } from "@nestjs/typeorm"
import { Area } from "./area.entity"
import { Repository } from "typeorm"
import { HttpStatus } from "@nestjs/common"
import { createAreaDto } from "./dto/area.dto"


export class AreaService{ 
	
	constructor(
		@InjectRepository(Area) private areasRepository: Repository<Area>,
  ) {}

  async getAreas() {
	const items = await this.areasRepository.find({relations:["Funciones"]})
  
	return {data : items, status: HttpStatus.OK }
}
 

async getAreabyId(id:number) {
 
const foundUsuario = await this.areasRepository.findOne({where:{id}}) 
return {data : foundUsuario, status: HttpStatus.OK }
}



async createArea(area: createAreaDto){

const newItemFlag = { ...area, fhcreacion: new Date()}
const newItem = await this.areasRepository.create({...newItemFlag})
const itemSaved = await this.areasRepository.save({...newItem})

return{ data:itemSaved, status : HttpStatus.OK}
  }

}