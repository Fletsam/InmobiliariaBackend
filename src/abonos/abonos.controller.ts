import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { AbonoService } from "./abonos.service";
import { CreatAbonoDto } from "./dto/abono.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";



@Controller('abonos')
@UseGuards(AuthGuard)
export class AbonosController {
	constructor(private abonoService : AbonoService) {}

	@Get('/total/:id')
	getAbonos(

		@Param('id', ParseIntPipe) id: number
	) {
		
		return this.abonoService.getTotalMonto(id)
	}
	
	@Get(':id')
	getAbono(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonobyId(id)
	}

	@Get('/rfc/:rfcId')
	getAbonosbyRfc(
		@Param('rfcId', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonosByRfc(id)
		
	}

	@Get('/usuario/:usuarioId')
	GetbyUsuario(
		@Param('usuarioId', ParseIntPipe) id: number,
	){
		return this.abonoService.getAbonosByUsuario(id)
	}


	@Post('/usuario/:usuarioId')
	createAbono(
		@Param("usuarioId", ParseIntPipe) id:number,
		@Body() abono: CreatAbonoDto){
		return this.abonoService.createAbono(abono ,id)
	}

	@Patch('/usuario/:usuarioId/:id')
	updateAbono(
		@Param('id',ParseIntPipe) id:number,
		@Param('usuarioId',ParseIntPipe) usuarioId:number,
		@Body() abono:UpdateAbonoDto,
	) {
		return this.abonoService.editAbono(id,usuarioId, abono)
	}

}