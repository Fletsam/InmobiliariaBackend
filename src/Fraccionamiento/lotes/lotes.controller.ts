import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { LotesService } from "./lotes.service";
import { CreateLotesDto } from "./dto/lotes.dto";


@Controller('lotes')
export class  LotesController {

	constructor(private lotesService : LotesService) {}

	@Get('')
	getManzanas(){
		return this.lotesService.getLotes()

	}

	@Get(':id')
	getManzana(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.lotesService.getLoteById(id)	
	}

	@Post('')
	createManzana(
		@Body() lote:CreateLotesDto
	) {
		{
			return this.lotesService.createLote(lote)
		}
	} 




}