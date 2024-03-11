import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AreaService } from "./area.service";
import { createAreaDto } from "./dto/area.dto";

@Controller('areas')
export class AreaController {
constructor(private areaService : AreaService) {}

	@Get('')
	getAreas(){
		return this.areaService.getAreas()
	}
	
	@Get(':id')
	getArea(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.areaService.getAreabyId(id)	
	}
	
	@Post('')
	createFraccionamiento(
		@Body() area:createAreaDto
	) {
		{
			return this.areaService.createArea(area)
		}
	} 


}