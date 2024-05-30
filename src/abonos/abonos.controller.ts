import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { AbonoService } from "./abonos.service";
import { CreatAbonoDto } from "./dto/abono.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";
import { createAbonoFraccDto } from "./abonofracc/dto/abonofracc.dto";
import { createAbonoProvDto } from "./abonoprov/dto/abonoprov.dto";
import { CreateAbonoVentasDto } from "./abonoventas/dto/abonoventas.dto";
import { createAbonoGerenciaDto } from "./abonogerencia/dto/abonogerencia.dto";
import { createAbonoNominaDto } from "./abonosnomina/dto/abonosnomina.dto";



@Controller('abonos')
@UseGuards(AuthGuard)
export class AbonosController {
	constructor(private abonoService : AbonoService) {}

	@Get('')
	getAbonos(
	) {
		
		return this.abonoService.getAbonos()
	}

	
	@Get('mes')
	getAbonosMes() {
		return this.abonoService.getAbonosMes()
	}
	@Get('mes/:id')
	getAbonosMesbyId(
		@Param('id', ParseIntPipe) id: number,
	) {
		return this.abonoService.getAbonoMesId(id)
	}

	@Get('contrato/:id')
	getAbono(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonobyId(id)
	}

	@Delete('contrato/:id')
	deleteAbono(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoContrato(id)
	}

	@Post('/contratoFracc/:id')
	createAbonoFracc(
		@Param("id", ParseIntPipe) id:number,
		@Body() abonoFracc: createAbonoFraccDto){
		return this.abonoService.createAbonoFracc(abonoFracc ,id)
	}

	@Get('fracc/:id')
	getAbonoFracc(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonoFraccbyId(id)
	}
	@Delete('/contratoFracc/:id')
	deleteAbonoFracc(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoContratoFracc(id)
	}
	@Get('prov/:id')
	getAbonoProv(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonoProvbyId(id)
	}
	@Get('prov')
	getAbonosProv() {
		
		return this.abonoService.getAbonosProv()
	}
	@Post('/contratoProv/:id')
	createAbonoProv(
		@Param("id", ParseIntPipe) id:number,
		@Body() abonosProv: createAbonoProvDto){
		return this.abonoService.createAbonoProv(abonosProv ,id)
	}

	@Delete('/contratoProv/:id')
	deleteAbonoProv(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoContratoProv(id)
	}



	@Post('/usuario/:id')
	createAbonoNomina(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: createAbonoNominaDto){
		return this.abonoService.createAbonoNomina(abono, id)
	}
	@Get('usuario/:id')
	getAbonoNomina(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonoNominaById(id)
	}
	
	@Delete('/usuario/:id')
	deleteAbonoNomina(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoNomina(id)
	}


	@Post('/contrato/:id')
	createAbonoContrato(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: CreatAbonoDto){
		return this.abonoService.createAbonoContrato(abono ,id)
	}

	@Post('/vendedores/:id')
	createAbonoVentas(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: CreateAbonoVentasDto){
		return this.abonoService.createAbonoVentas(abono, id)
	}

	@Delete('/vendedores/:id')
	deleteAbonoVenta(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoVentas(id)
	}

	@Get('vendedores/:id')
	getAbonoVentas(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonoVentaById(id)
	}

	@Post('/dias/:id')
	createAbonosGerencia(
		@Param("id", ParseIntPipe) id:number,
		@Body() abono: createAbonoGerenciaDto){
		return this.abonoService.createAbonoGerencia(abono, id)
	}

	@Get('/allDia/:id')
	GetAllAbonosDia(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonosDia(id)
	}

	@Get('/dias/:id')
	GetAbonoGerenciaId(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonoGerenciaById(id)
	}

	@Post('/fhcreacion')
	getAbonoFhCreacion(
		@Body() fhcreacion: number){
		return this.abonoService.getAbonoFhCreacion(fhcreacion)
	}

	@Delete('/dias/:id')
	deleteAbonoGerencia(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.deleteAbonoGerencia(id)
	}

	/* @Get('/contrato/:id')
	getAbonobyEstadoCuenta(
		@Param('id', ParseIntPipe) id: number,
	) {
		
		return this.abonoService.getAbonosByEstadoCuenta(id)
	} */

	@Patch('/contrato/:contratoid/:id')
	updateAbono(
		@Param('id',ParseIntPipe) id:number,
		@Param('contratoid',ParseIntPipe) contratoId:number,
		@Body() abono:UpdateAbonoDto,
	) {
		return this.abonoService.editAbono(id, contratoId ,abono)
	}

}