import { Body, Controller, Get, Post } from "@nestjs/common";
import { AbonoService } from "./abonos.service";
import { CreatAbonoDto } from "./dto/abono.dto";



@Controller('abonos')
export class AbonosController {
	constructor(private abonoService : AbonoService) {}

	@Get('')
	getUsers() {
		return this.abonoService.getAbonos
	}

	@Post()
	createAbono(@Body() abono: CreatAbonoDto){
		return this.abonoService.createAbono(abono)
	}

}