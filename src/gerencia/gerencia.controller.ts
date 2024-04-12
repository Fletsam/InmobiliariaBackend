import { Body, Controller, Get, Post } from "@nestjs/common";
import { GerenciaService } from "./gerencia.service";
import { createGerenciaDto } from "./dto/gerencia.dto";

@Controller('gerencia')
export class GerenciaController {
	constructor(private gerenciaService : GerenciaService ){}

	@Post('')
	createVendedor(@Body() gerencia: createGerenciaDto){
		
		return this.gerenciaService.createGerencia(gerencia)
	}
	
	@Get('')
	getGerencia() {
		return this.gerenciaService.getGerencia()
	}
}