import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrivilegiosService } from "./privilegios.service";
import { CreatePrivilegiosDto } from "./dto/privilegios.dto";

@Controller('privilegios')
export class PrivilegiosController {
	constructor(private PrivilegiosService : PrivilegiosService) {}

	@Get('')
	getPrivilegios() {
		return this.PrivilegiosService.getPrivilegios()
	}

	@Post()
	createPrivilegio(@Body() privilegio: CreatePrivilegiosDto){
		return this.PrivilegiosService.createUsuario(privilegio)
	}

}