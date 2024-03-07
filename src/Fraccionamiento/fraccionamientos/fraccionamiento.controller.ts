import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { FraccionamientoService } from "./fraccionamiento.service";
import { CreateFraccionamientoDto } from "./dto/fraccionamiento.dto";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('fraccionamientos')
@UseGuards(AuthGuard)
export class FraccionamientoCrontroller {

	constructor(private FraccionamientoService : FraccionamientoService) {}

	@Get('')
	getFraccionamientos(){
		return this.FraccionamientoService.getFraccionamientos()

	}

	@Get(':id/usuario/:id2')
	getFraccionamiento(
		@Param('id',ParseIntPipe) id:number,
		@Param('id2',ParseIntPipe) id2:number,
	)
	{
		return this.FraccionamientoService.getFraccionamientoById(id,id2)	
	}
	
	@Delete(':id')
	deleteFracc(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.FraccionamientoService.deleteFracc(id)	
	}

	@Get("/usuario/:id")
	getFraccbyUsuario(
		@Param("id",ParseIntPipe ) id:number,
	)
	{
		return this.FraccionamientoService.getFraccionamientoByUsuario(id)	
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