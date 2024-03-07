import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClientesDto } from "./dto/clientes.dto";
import { AuthGuard } from "src/auth/auth.guard";



@Controller('clientes')
@UseGuards(AuthGuard)
export class ClientesController {


	constructor(private ClientesService : ClientesService) {}

	@Get('')
	getClientes(){
		return this.ClientesService.getClientes()

	}

	@Get(':id')
	getCliente(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ClientesService.getClienteById(id)	
	}
	@Get('/usuario/:id')
	getClientebyUsuario(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ClientesService.getClientesbyUsuario(id)	
	}

	@Post('')
	createCliente(
		@Body() cliente:CreateClientesDto
	) {
		{
			return this.ClientesService.createCliente(cliente)
		}
	} 
	@Patch(':id')
	editCliente(
		@Body() cliente:CreateClientesDto,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ClientesService.editCliente(cliente, id)
		}
	} 
	@Delete(':id')
	deleteCliente(
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ClientesService.deleteCliente(id)
		}
	}


}