import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common"
import { CreateContratoDto } from "src/Contrato/contratos/dto/contratos.dto"
import { IngresosContratosService } from "./ingresoscontratos.service"
import { CreateIngresosContratosDto } from "./dto/ingresoscontratos.dto"

@Controller('ingresos')
export class IngresosContratosController {

	constructor(private  IngresosContratosService : IngresosContratosService) {}

	@Get('')
	getContratos(){
		return this.IngresosContratosService.getIngresoContratos()

	}

/* 	@Get(':id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratoById(id)	
	} */

	@Post('/contratos/:id')
	createContrato(
		@Body() ingresoscontratos:CreateIngresosContratosDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.IngresosContratosService.createIngresoContratos(ingresoscontratos, id)
		}
	} 
}

