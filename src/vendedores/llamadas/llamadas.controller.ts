import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/auth/auth.guard";
import { LlamadasService } from "./llamadas.service";
import { createLlamadasDto } from "./dto/llamadas.dto";

@Controller('llamadas')
@UseGuards(AuthGuard)
export class LlamadasController {
	constructor(private llamadasService : LlamadasService) {}

	@Get('')
	getLlamadas() {
		return this.llamadasService.getLlamadas()
	}

	@Post()
	createLlamada(@Body() llamada: createLlamadasDto){
		
		return this.llamadasService.createLlamada(llamada)
	}
}