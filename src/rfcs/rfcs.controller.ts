import { Body, Controller, Get, Post } from "@nestjs/common";
import { RfcsService } from "./rfcs.service";
import { CreateRfcsDto } from "./dto/rfcs.dto";


@Controller('rfcs')

export class RfcsController {

	constructor(private RfcsService : RfcsService) {}

	@Get('')
	getUsers() {
		return this.RfcsService.getRfcs
	}

	@Post()
	createAbono(@Body() rfc: CreateRfcsDto){
		return this.RfcsService.createRfc(rfc)
	}


}