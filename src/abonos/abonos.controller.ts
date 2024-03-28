import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { AbonoService } from "./abonos.service";
import { CreatAbonoDto } from "./dto/abono.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";



@Controller('abonos')
@UseGuards(AuthGuard)
export class AbonosController {
	constructor(private abonoService : AbonoService) {}

	@Get('')
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


	@Post('/contrato/:id')
	createAbonoContrato(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: CreatAbonoDto){
		return this.abonoService.createAbonoContrato(abono ,id)
	}

	@Get('/contrato/:id')
	getAbonobyEstadoCuenta(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonosByEstadoCuenta(id)
	}

	@Patch('/contrato/:contratoid/:id')
	updateAbono(
		@Param('id',ParseIntPipe) id:number,
		@Param('contratoid',ParseIntPipe) contratoId:number,
		@Body() abono:UpdateAbonoDto,
	) {
		return this.abonoService.editAbono(id, contratoId ,abono)
	}

}