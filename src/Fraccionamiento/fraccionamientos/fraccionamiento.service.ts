import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fraccionamientos } from "./fraccionamientos.entity";
import { Repository } from "typeorm";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { CreateFraccionamientoDto } from "./dto/fraccionamiento.dto";



@Injectable()
export class FraccionamientoService {
	constructor(
	@InjectRepository(Fraccionamientos) private fraccionamientosRepository: Repository<Fraccionamientos>, 	) {}
	
	
	
	async getFraccionamientos() {
	const items = await this.fraccionamientosRepository.find()
  
	return {data : items, status: HttpStatus.OK }
	}
 
	async getFraccionamientoById(id: number) {
    const Found = await this.fraccionamientosRepository.findOne({
      where: { id }, relations: ["Lotes" , "Manzanas"],
    });
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Fraccionamiento not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return Found;
  }

  async createFraccionamiento(fraccionamiento: CreateFraccionamientoDto ){

	const newFlag = { ...fraccionamiento, fhcreacion: new Date()}
	const newItem = await this.fraccionamientosRepository.create({...newFlag})
	const Saved = await this.fraccionamientosRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }



}