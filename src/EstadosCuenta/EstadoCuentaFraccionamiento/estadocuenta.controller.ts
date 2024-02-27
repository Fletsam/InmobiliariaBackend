import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common"
import { EstadoCuentaFraccionamiento } from "./estadocuentafraccionamiento.entity"
import { EstadoCuentaFraccionamientoService } from "./estadocuentafraccionamiento.service"

@Controller('estadocuenta')
export class EstadoCuentaFraccionamientoController {	
	constructor(private  EstadoCuentaFraccionamientoService : EstadoCuentaFraccionamientoService) {}

	@Get('')
	getContratos(){
		return this.EstadoCuentaFraccionamientoService.getEstadoCuentas()

	}

	@Get('/fraccionamiento/:id')
	getContrato(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.EstadoCuentaFraccionamientoService.getEstadoCuentasbyContrato(id)	
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