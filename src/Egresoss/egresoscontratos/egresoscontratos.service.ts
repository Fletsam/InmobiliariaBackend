import { InjectRepository } from "@nestjs/typeorm"
import { EgresosContratos } from "./egresoscontratos.entity"
import { Repository } from "typeorm"
import { Contratos } from "src/Contrato/contratos/contratos.entity"
import { HttpStatus } from "@nestjs/common"

export class EgresosContratosService {
constructor(
		@InjectRepository(EgresosContratos) private egresosContratosRepository: Repository<EgresosContratos>,
		@InjectRepository(Contratos) private contratosRepository: Repository<Contratos>,
	 ) {}

	async getEgresoContratos() {
	const items = await this.egresosContratosRepository.find(
	)
	return {data : items, status: HttpStatus.OK }
	}



}