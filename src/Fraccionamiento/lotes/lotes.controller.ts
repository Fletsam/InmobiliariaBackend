import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { LotesService } from "./lotes.service";
import { CreateLotesDto } from "./dto/lotes.dto";


@Controller('lotes')
export class  LotesController {

	constructor(private lotesService : LotesService) {}

	@Get('')
	getLotes(){
		return this.lotesService.getLotes()

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