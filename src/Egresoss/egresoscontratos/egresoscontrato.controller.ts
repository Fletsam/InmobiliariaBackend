import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common"
import { EgresosContratosService } from "./egresoscontratos.service"
import { CreateEgresosDto } from "../egresos/dto/egresos.dto"

@Controller('egresos')
export class EgresosContratosController {
	
	constructor(private  EgresosContratosService : EgresosContratosService) {}

	@Get('')
	getContratos(){
		return this.EgresosContratosService.getEgresoContratos()

	}

/* 	@Get(':id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratoById(id)	
	} */

	/* @Post('/contratos/:id')
	createContrato(
		@Body() egresoscontratos:CreateEgresosDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.EgresosContratosService.createIngresoContratos(egresoscontratos, id)
		}
	} 
 */
}