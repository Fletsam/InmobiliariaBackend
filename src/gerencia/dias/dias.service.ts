import { Repository } from "typeorm";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { Dias } from "./dias.entity";
import { Gerencia } from "../gerencia.entity";
import { createDiasDto } from "./dto/dias.dto";
@Injectable()
export class DiasService {
	constructor(
	@InjectRepository(Gerencia) private gerenciaRepository: Repository<Gerencia>,
	@InjectRepository(Dias) private diasRepository: Repository<Dias>,
	@InjectRepository(AbonosGerencia) private abonosGerenciaRepository: Repository<AbonosGerencia>,
    ) {}



async createDia(dia: createDiasDto ){
	const newFlag = { ...dia  }
	const newItem = await this.diasRepository.create({...newFlag})
	const Saved = await this.diasRepository.save({...newItem})
	return{ data:Saved, status : HttpStatus.OK}
  }


  async getDias(){
		const items  = await this.diasRepository.find({relations: ["AbonosGerencia"]})
	
		const ultimoElemento = items.shift()
	let fechaAnterior = new Date(ultimoElemento?.fhcreacion)
	let fechaActual = new Date();
	let diferenciaEnS = Number(fechaActual) - Number(fechaAnterior);
	let diferencia = diferenciaEnS / (1000 * 3600 * 24);
	let yaPasoUnDia = (diferencia >= 1);

	console.log(yaPasoUnDia);
	
		return { data: items , yaPasoUnDia, status : HttpStatus.OK}
	}

  async getDia(id:number){
		const items  = await this.diasRepository.findOne( {where:{id} , relations: ["AbonosGerencia"]})

		if (!items) {
      throw new BadRequestException({
        data: null,
        message: 'Usuario no encontrado',
        status: HttpStatus.NOT_FOUND,
      });
    }	

		const abonosActivos = items.AbonosGerencia.filter(item => item.estatus)
		const totalIngresos = abonosActivos.reduce((total, monto)=> total + monto.ingreso , 0)
		items.ingresototal = totalIngresos

		const totalEgresos = abonosActivos.reduce((total,monto)=> total + monto.egreso,0)
		items.egresototal = totalEgresos

		const Flag = {...items}
		const newFlag = await this.diasRepository.create(Flag)
		await this.diasRepository.save(newFlag)

		return { data: items , abonosActivos, status : HttpStatus.OK}
	}

}