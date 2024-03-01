import { Repository } from "typeorm"
import { EstadoCuentaFraccionamiento } from "./estadocuentafraccionamiento.entity"
import { Contratos } from "src/Contrato/contratos/contratos.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity"
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity"
import { HttpStatus } from "@nestjs/common"
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity"

export class EstadoCuentaFraccionamientoService {

		constructor(
		@InjectRepository(EstadoCuentaFraccionamiento) private estadoCuentaFraccionamientoRepository: Repository<EstadoCuentaFraccionamiento>,
		@InjectRepository(Fraccionamientos) private fraccionamientoRepository: Repository<Fraccionamientos>,
		@InjectRepository(IngresosFraccionamientos) private ingresosFraccionamientoRepository: Repository<IngresosFraccionamientos>,
		@InjectRepository(EgresosFraccionamiento) private egresosFraccionamientoRepository: Repository<EgresosFraccionamiento>,
	 ) {}

	async getEstadoCuentas() {
	const items = await this.estadoCuentaFraccionamientoRepository.find(
	)
	return {data : items, status: HttpStatus.OK }
	}

	async getEstadoCuentasbyContrato(id:number) {
	const Found = await this.estadoCuentaFraccionamientoRepository.findOne( {where: {id},  relations:["IngresosFraccionamientos","EgresosFraccionamiento"] })
	
	const costototalFracc = await this.fraccionamientoRepository.findOne({where: {id:Found.fraccionamientoId}})
	

	const montoinicialegreso = await this.egresosFraccionamientoRepository.findOne({where:{fraccionamientoId:Found.fraccionamientoId}})

		montoinicialegreso.monto = costototalFracc.costototal

	const montoIngreso = await Found.IngresosFraccionamientos.reduce((total,monto)=> total + monto.monto,0 )	

	const saldo = ( montoinicialegreso.monto - montoIngreso  ) 

	const estadoCuenta = {...Found, montoingreso : montoIngreso, montoegreso:montoinicialegreso.monto, cuentasaldo : saldo  }

	await this.egresosFraccionamientoRepository.save({...montoinicialegreso,monto:montoinicialegreso.monto})

	return {data : estadoCuenta, status: HttpStatus.OK }
	}
}