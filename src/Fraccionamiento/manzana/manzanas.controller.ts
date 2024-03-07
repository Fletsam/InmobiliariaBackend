import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import {  ManzanasService } from "./manzanas.service";
import {  CreateManzanaDto } from "./dto/manzanas.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('manzanas')
@UseGuards(AuthGuard)
export class ManzanaController {

	constructor(private ManzanaService : ManzanasService) {}

	@Get('')
	getManzanas(){
		return this.ManzanaService.getManzanas()

	}

	@Get(':id')
	getManzana(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ManzanaService.getManzanaById(id)	
	}

	@Delete(':id')
	deleteManzana(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ManzanaService.deleteManzana(id)	
	}

	@Get(':id')
	getManzanabyUsuario(
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