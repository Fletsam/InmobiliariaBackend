import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { LotesService } from "./lotes.service";
import { CreateLotesDto } from "./dto/lotes.dto";

@Controller('lotes')
export class LotesController {

	constructor(private LotesService : LotesService) {}

	@Get('')
	getLotes(){
		return this.LotesService.getLotes()

	}

	@Get('id')
	getLote(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.LotesService.getLotesById(id)	
	}

	@Post('')
	createFraccionamiento(
		@Body() lote:CreateLotesDto
	) {
		{
			return this.LotesService.createLote(lote)
		}
	} 


}