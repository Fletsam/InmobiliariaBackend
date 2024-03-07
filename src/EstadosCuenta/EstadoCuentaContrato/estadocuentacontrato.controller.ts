import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common"
import { EstadoCuentaContratoService } from "./estadocuentacontrato.service"
import { CreateEstadoCuentaContratoDto } from "./dto/estadocuentacontrato.dto"
import { AuthGuard } from "src/auth/auth.guard"

@Controller('estadocuenta')
@UseGuards(AuthGuard)
export class EstadoCuentaContratoController {
	
	constructor(private  EstadoCuentaContratoService : EstadoCuentaContratoService) {}

	@Get('')
	getContratos(){
		return this.EstadoCuentaContratoService.getEstadoCuentas()

	}

	@Get('/contrato/:id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.EstadoCuentaContratoService.getEstadoCuentasbyContrato(id)	
	}

/* 	@Post('/contratos/:id')
	createContrato(
		@Body() estadocuenta:CreateEstadoCuentaContratoDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.EstadoCuentaContratoService.createIngresoContratos(ingresoscontratos, id)
		}
	}  */
}