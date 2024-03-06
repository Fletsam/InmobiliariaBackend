import { InjectRepository } from "@nestjs/typeorm"
import { EstadoCuentaContrato } from "./estadocuentacontrato.entity"
import { Repository } from "typeorm"
import { HttpStatus } from "@nestjs/common"
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity"
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity"
import { Contratos } from "src/Contrato/contratos/contratos.entity"

export class EstadoCuentaContratoService {

	constructor(
		@InjectRepository(EstadoCuentaContrato) private estadoCuentaContratoRepository: Repository<EstadoCuentaContrato>,
		@InjectRepository(Contratos) private contratoRepository: Repository<Contratos>,
		@InjectRepository(IngresosContratos) private ingresosContratoRepository: Repository<IngresosContratos>,
		@InjectRepository(EgresosContratos) private egresosContratoRepository: Repository<EgresosContratos>,
	 ) {}

	async getEstadoCuentas() {
	const items = await this.estadoCuentaContratoRepository.find(
	)
	return {data : items, status: HttpStatus.OK }
	}

	async getEstadoCuentasbyContrato(id:number) {
	const Found = await this.estadoCuentaContratoRepository.findOne( {where: {id},  relations:["IngresosContratos","EgresosContratos"] })
		
	const contrato =	await this.contratoRepository.findOne({where: {id:Found.id}, relations:["IngresosContratos","EgresosContratos"] })
	
	const montoIngreso = contrato.IngresosContratos.reduce((total,monto)=> total + monto.montoingreso,0 )	

	const saldo = ( Found.montoegreso - montoIngreso  ) 

	const estadoCuenta = {...Found, montoingreso : montoIngreso, cuentasaldo : saldo  }

	return {data : estadoCuenta, status: HttpStatus.OK }
	}
}