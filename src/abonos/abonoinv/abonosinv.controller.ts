import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { AbonoInvService } from "./abonoinv.service"
import { CreateAbonoInvDto } from "./dto/abonoinv.dto"

@Controller('abonos')
@UseGuards(AuthGuard)
export class AbonosInvController {
	constructor(private abonoInvService : AbonoInvService) {}

	/* @Get('')
	getAbonos(
	) {
		
		return this.abonoService.getAbonos()
	}
	
	@Get(':id')
	getAbono(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonobyId(id)
	}


	@Get('/usuario/:usuarioId')
	GetbyUsuario(
		@Param('usuarioId', ParseIntPipe) id: number,
	){
		return this.abonoService.getAbonosByUsuario(id)
	}
 */

	@Post('/contratoInv/:id')
	createAbonoContrato(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: CreateAbonoInvDto){
		return this.abonoInvService.createAbonoContrato(abono ,id)
	}

}