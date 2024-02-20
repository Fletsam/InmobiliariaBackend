import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ManzanaService } from "./manzana.service";
import { CreateManzanaDto } from "./dto/manzana.dto";


@Controller('manzanas')
export class  ManzanaController {

	constructor(private ManzanaService : ManzanaService) {}

	@Get('')
	getManzanas(){
		return this.ManzanaService.getManzanas()

	}

	@Get('id')
	getManzana(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ManzanaService.getManzanaById(id)	
	}

	@Post('')
	createManzana(
		@Body() manzana:CreateManzanaDto
	) {
		{
			return this.ManzanaService.createManzana(manzana)
		}
	} 




}