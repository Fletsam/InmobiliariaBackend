
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ProveedorService } from "./proveedor.service";
import { createProveedorDto } from "./dto/proveedor.dto";



@Controller('proveedor')
export class ProveedorController {
	constructor(private proveedorService : ProveedorService) {}

	@Get('')
	getProveedores() {
		return this.proveedorService.getProveedores()
	}

	@Get('')
	getProveedorbyId(
		@Param('id', ParseIntPipe) id:number) {
		return this.proveedorService.getProveedorById(id)
	}

	@Post()
	createProveedor(
		@Body() proveedor: createProveedorDto) {
		
		return this.proveedorService.createProveedor(proveedor)
	}
}