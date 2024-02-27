import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IngresosContratos } from "./ingresoscontratos.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { HttpStatus } from "@nestjs/common";
import { CreateIngresosContratosDto } from "./dto/ingresoscontratos.dto";
import { CreateContratoDto } from "src/Contrato/contratos/dto/contratos.dto";
import { Abono } from "src/abonos/abono.entity";
import { CreatAbonoDto } from "src/abonos/dto/abono.dto";

export class IngresosContratosService {

	constructor(
		@InjectRepository(IngresosContratos) private ingresoContratosRepository: Repository<IngresosContratos>,
		@InjectRepository(Contratos) private contratosRepository: Repository<Contratos>,
		@InjectRepository(Abono) private abonoRepository: Repository<Abono>,
	 ) {}

	async getIngresoContratos() {
	const items = await this.ingresoContratosRepository.find(
	)
	return {data : items, status: HttpStatus.OK }
	}

	async createIngresoContratos( ingresoscontratos:CreateIngresosContratosDto, id:number ) {

		const contrato = await this.contratosRepository.findOne({where:{id}})
		const newFlag = {...ingresoscontratos, 
			concepto:"Enganche",
			monto: contrato.enganche, 
			fhcreacion: new Date() , 
			contratoId : contrato.id  }
		const newItem = await this.ingresoContratosRepository.create({...newFlag})
		const Saved = await this.ingresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}

	}

	async createIngresoAbono( ingresoscontratos:CreateIngresosContratosDto, abono:CreatAbonoDto){

		const newFlag = { ...ingresoscontratos, concepto:"Abono" , fhcreacion: new Date()
		}
		const newItem = await this.ingresoContratosRepository.create({...newFlag})
		const Saved = await this.ingresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}

}