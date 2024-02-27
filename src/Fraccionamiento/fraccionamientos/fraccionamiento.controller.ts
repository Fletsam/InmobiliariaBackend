import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { FraccionamientoService } from "./fraccionamiento.service";
import { CreateFraccionamientoDto } from "./dto/fraccionamiento.dto";


@Controller('fraccionamientos')
export class FraccionamientoCrontroller {

	constructor(private FraccionamientoService : FraccionamientoService) {}

	@Get('')
	getFraccionamientos(){
		return this.FraccionamientoService.getFraccionamientos()

	}

	@Get(':id')
	getFraccionamiento(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.FraccionamientoService.getFraccionamientoById(id)	
	}

	@Post('')
	createFraccionamiento(
		@Body() fraccionamiento:CreateFraccionamientoDto
	) {
		{
			return this.FraccionamientoService.createFraccionamiento(fraccionamiento)
		}
	} 


}