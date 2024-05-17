import { Repository } from "typeorm";
import { Gerencia } from "./gerencia.entity";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpStatus, Injectable } from "@nestjs/common";
import { createGerenciaDto } from "./dto/gerencia.dto";
import { Dias } from "./dias/dias.entity";
@Injectable()
export class GerenciaService {
	constructor(
	@InjectRepository(Gerencia) private gerenciaRepository: Repository<Gerencia>,
	@InjectRepository(AbonosGerencia) private abonosGerenciaRepository: Repository<AbonosGerencia>,
    ) {}

	async createGerencia(gerencia: createGerenciaDto ){
		const Gerencia = await this.gerenciaRepository.find()
		
		if(Gerencia.length){
			return "Ya existe una gerencia"
		}
	const newFlag = { ...gerencia  }
	const newItem = await this.gerenciaRepository.create({...newFlag})
	const Saved = await this.gerenciaRepository.save({...newItem})
		
	return{ data:Saved, status : HttpStatus.OK}
  }
  async getGerencia(){
		const items  = await this.gerenciaRepository.find({relations: ["Dias", "AbonosGerencia"]})
	
		
			

		const item = items[items.length - 1];
	console.log(item);
		const flagitem = item 
		const ultimoElemento = flagitem.Dias.shift()
		console.log(ultimoElemento);
		
		let fechaAnterior = new Date(ultimoElemento?.fhcreacion)
		let fechaActual = new Date();
		let diferenciaEnS = Number(fechaActual) - Number(fechaAnterior);
		let diferencia = diferenciaEnS / (1000 * 3600 * 24);
		let yaPasoUnDia = (diferencia >= 1);

		console.log( yaPasoUnDia);
		
		const totalIngresos = item.Dias?.reduce((total,monto)=> total + monto.ingresototal, 0 )
			item.ingresototal = totalIngresos
		const totalEgresos = item.Dias?.reduce((total, monto ) => total + monto.egresototal, 0)
			item.egresototal  = totalEgresos

  		const Flag = {...item}
		const newFlag = await this.gerenciaRepository.create(Flag)
		console.log(Flag);
		console.log(newFlag);
		
		await this.gerenciaRepository.save(newFlag)

		return { data: item , /* yaPasoUnDia, */ status : HttpStatus.OK}
	}

}