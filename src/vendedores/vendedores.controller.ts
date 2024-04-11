import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { VendedoresService } from "./vendedores.service";
import { CreateVendedoresDto } from "./dto/vendedores.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('vendedores')
@UseGuards(AuthGuard)
export class VendedoresController {
	constructor(private vendedorService : VendedoresService) {}

	@Get('')
	getVendedor() {
		return this.vendedorService.getVendedores()
	}

	@Get(':id')
	getVendedorbyId(
		@Param('id', ParseIntPipe) id:number
	) {
		return this.vendedorService.getVendedoresbyId(id)
	}

	@Post()
	createVendedor(@Body() vendedor: CreateVendedoresDto){
		
		return this.vendedorService.createVendedor(vendedor)
	}
}