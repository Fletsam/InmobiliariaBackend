import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { DiasService } from "./dias.service";
import { createDiasDto } from "./dto/dias.dto";

@Controller('dias')
export class DiasController {
	constructor(private diasService : DiasService ){}

	@Post('')
	createDia(@Body() dias: createDiasDto){
		
		return this.diasService.createDia(dias)
	}
	
	@Get('')
	getDias() {
		return this.diasService.getDias()
	}

	@Get('/:id')
	getDia(
		@Param('id', ParseIntPipe) id:number
	) {
		return this.diasService.getDia(id)
	}
}