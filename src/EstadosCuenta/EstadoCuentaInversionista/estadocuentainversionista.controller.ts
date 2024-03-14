import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { EstadoCuentaInversionistaService } from "./estadocuentainversionista.service"

@Controller('estadocuenta')
@UseGuards(AuthGuard)
export class EstadoCuentaInversionistaController {	
	constructor(private  EstadoCuentaInversionistaService : EstadoCuentaInversionistaService) {}

	@Get('')
	getContratos(){
		return this.EstadoCuentaInversionistaService.getEstadoCuentas()

	}

	@Get('/inversionista/:id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.EstadoCuentaInversionistaService.getEstadoCuentasbyContrato(id)	
	}

}