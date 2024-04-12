import { Body, Controller, Get, Post } from "@nestjs/common";
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
	getDia() {
		return this.diasService.getDias()
	}
}