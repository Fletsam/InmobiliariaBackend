import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { ContratoService } from "./contrato.service";
import { CreateContratoDto } from "./dto/contratos.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateContratoFracc } from "../contratosFracc/dto/contratosfracc.dto";


@Controller('contratos')
@UseGuards(AuthGuard)
export class ContratoController {
	
	constructor(private ContratoService : ContratoService) {}

	@Get('')
	getContratosLote(){
		return this.ContratoService.getContratosLote()

	}
	@Get('/fracc/:id')
	getContratosFracc(
		@Param('id',ParseIntPipe) id:number,
	){
		return this.ContratoService.getContratoByIdFracc(id)

	}

	@Get(':id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratoById(id)	
	}

	@Post('/lote/:id')
	createContratoLote(
		@Body() contrato:CreateContratoDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContrato(contrato, id)
		}
	} 
	@Post('/fraccionamiento/:id')
	createContratoFracc(
		@Body() contratofracc:CreateContratoFracc ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContratoFracc(contratofracc, id)
		}
	} 
}