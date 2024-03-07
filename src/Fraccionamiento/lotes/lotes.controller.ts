import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { LotesService } from "./lotes.service";
import { CreateLotesDto } from "./dto/lotes.dto";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('lotes')
@UseGuards(AuthGuard)
export class  LotesController {

	constructor(private lotesService : LotesService) {}

	@Get('')
	getAllLotes(){
		return this.lotesService.getAllLotes()

	}
	@Get('/disponibles')
	getAllLotesDisponibles(){
		return this.lotesService.getAllLotesDisponibles()

	}
	@Get('/vendidos')
	getAllLotesVendidos(){
		return this.lotesService.getAllLotesVendidos()

	}
	@Get('disponibles/:id')
	getLotesDisponibles(
		@Param('id',ParseIntPipe) id:number,
	){
		return this.lotesService.getLotesDisponibles(id)

	}

	@Get(':id')
	getLote(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.lotesService.getLoteById(id)	
	}
	
	@Get(':id')
	getLotesbyUsuario(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.lotesService.getLoteById(id)	
	}
	
	

	@Delete(':id')
	deleteLote(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.lotesService.deleteLote(id)	
	}

	@Post('')
	createLote(
		@Body() lote:CreateLotesDto
	) {
		{
			return this.lotesService.createLote(lote)
		}
	} 




}