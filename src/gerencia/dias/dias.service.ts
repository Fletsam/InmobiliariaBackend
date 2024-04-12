import { Repository } from "typeorm";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpStatus, Injectable } from "@nestjs/common";
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

	async  formatearFecha(fecha) {
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0
  const año = fecha.getFullYear();

  // Formatea el día y mes para que tengan dos dígitos
  const diaFormateado = dia < 10 ? '0' + dia : dia;
  const mesFormateado = mes < 10 ? '0' + mes : mes;

  // Formatea la fecha en el formato deseado (día/mes/año)
  return `${diaFormateado}/${mesFormateado}/${año}`;
}



	async createDia(dia: createDiasDto ){
		const items = await this.diasRepository.find()
		const fh = items.map((item)=> item.fhcreacion)
		const fhcreacion = new Date("2024-04-12T10:00:00.000Z")

							
		const Found  = fh.find(async (item) =>  ( await this.formatearFecha(item) === ( await this.formatearFecha(fhcreacion))))
		console.log(Found);
 		return
	const newFlag = { ...dia  }
	const newItem = await this.diasRepository.create({...newFlag})
	const Saved = await this.diasRepository.save({...newItem})
		
	return{ data:Saved, status : HttpStatus.OK}
  }
  async getDias(){
		const items  = await this.diasRepository.find({relations: ["AbonosGerencia"]})
		
		return { data: items , status : HttpStatus.OK}
	}

}