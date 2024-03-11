import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { FuncionesService } from "./funciones.service"
import { CreateFuncionesDto } from "./dto/funciones.dto"

@Controller('funciones')
@UseGuards(AuthGuard)
export class FuncionesController {
	constructor(private funcionesService : FuncionesService) {}

	@Get('')
	getFunciones(){
		return this.funcionesService.getFunciones()
	}
	
	@Get(':id')
	getFuncion(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.funcionesService.getFuncionbyId(id)	
	}
	
	@Post('')
	createFuncion(
		@Body() funcion:CreateFuncionesDto
	) {
		{
			return this.funcionesService.createFuncion(funcion)
		}
	} 
	@Patch(':id')
	patchFuncion(
		@Param('id',ParseIntPipe) id:number,
		@Body() funcion:CreateFuncionesDto
	) {
		{
			return this.funcionesService.patchFuncion(funcion,id)
		}
	} 

}