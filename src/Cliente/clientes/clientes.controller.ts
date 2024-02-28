import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClientesDto } from "./dto/clientes.dto";



@Controller('clientes')
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