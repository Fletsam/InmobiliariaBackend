import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { RfcsService } from "./rfcs.service";
import { CreateRfcsDto } from "./dto/rfcs.dto";


@Controller('rfcs')

export class RfcsController {

	constructor(private RfcsService : RfcsService) {}

	@Get('')
	getRfcs() {
		return this.RfcsService.getRfcs()
	}


	@Get(':id')
	GetRfc(
		@Param('id', ParseIntPipe) id: number,
	){
		return this.RfcsService.getRfcById(id)
	}

	@Get('/usuario/:usuarioId')
	GetbyUsuario(
		@Param('usuarioId', ParseIntPipe) id: number,
	){
		return this.RfcsService.getRfcsByUsuario(id)
	}

	@Post('/usuario/:usuarioId')
	createRfc(
		@Param('usuarioId', ParseIntPipe) id:number,
		@Body() rfc: CreateRfcsDto){
		return this.RfcsService.createRfc(rfc , id)
	}



}