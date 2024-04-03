
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ProveedorService } from "./proveedor.service";
import { createProveedorDto } from "./dto/proveedor.dto";



@Controller('proveedor')
export class ProveedorController {
	constructor(private proveedorService : ProveedorService) {}

	@Get('')
	getProveedores() {
		return this.proveedorService.getProveedores()
	}

	@Get(':id')
	getProveedorbyId(
		@Param('id', ParseIntPipe) id:number) {
		return this.proveedorService.getProveedorById(id)
	}

	@Delete(':id')
	deleteProveedorbyId(
		@Param('id', ParseIntPipe) id:number) {
		return this.proveedorService.deleteProveedor(id)
	}

	@Post()
	createProveedor(
		@Body() proveedor: createProveedorDto) {
		
		return this.proveedorService.createProveedor(proveedor)
	}
}