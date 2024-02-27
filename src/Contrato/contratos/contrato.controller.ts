import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ContratoService } from "./contrato.service";
import { CreateContratoDto } from "./dto/contratos.dto";

@Controller('contratos')
export class ContratoController {
	
	constructor(private ContratoService : ContratoService) {}

	@Get('')
	getContratos(){
		return this.ContratoService.getContratos()

	}

	@Get(':id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratoById(id)	
	}

	@Post('/lote/:id')
	createContrato(
		@Body() contrato:CreateContratoDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContrato(contrato, id)
		}
	} 
}