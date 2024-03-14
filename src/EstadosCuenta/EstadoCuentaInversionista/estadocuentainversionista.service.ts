import { InjectRepository } from "@nestjs/typeorm"
import { EstadoCuentaInversionista } from "./estadocuentainversionista.entity"
import { ContratosInversionista } from "src/Contrato/contratosInversionista/contratoinversionista.entity"
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity"
import { EgresosInversionista } from "src/Egresoss/egresosinversiones/egresosinversiones.entity"
import { Repository } from "typeorm"
import { HttpStatus } from "@nestjs/common"

export class EstadoCuentaInversionistaService {

		constructor(
		@InjectRepository(EstadoCuentaInversionista) private estadoCuentaContratoInversionistaRepository : Repository<EstadoCuentaInversionista>,
	 ) {}

	async getEstadoCuentas() {
	const items = await this.estadoCuentaContratoInversionistaRepository.find(
	)
	return {data : items, status: HttpStatus.OK }
	}

	async getEstadoCuentasbyContrato(id:number) {
	const Found = await this.estadoCuentaContratoInversionistaRepository.findOne( {where: {id},  relations:["IngresosInversionista","EgresosInversionista"] })
	

	const montoIngreso = Found.IngresosInversionista.reduce((total,monto)=> total + monto.montoingreso,0 )	

	const montoEgreso = Found.EgresosInversionista.reduce((total,monto)=> total + monto.montoegreso,0  )	

	const saldo = ( Found.montoegreso - montoIngreso  ) 

	const estadoCuenta = {...Found, montoegreso: montoEgreso,  montoingreso : montoIngreso, cuentasaldo : saldo  }


	return {data : estadoCuenta, status: HttpStatus.OK }
	}
}