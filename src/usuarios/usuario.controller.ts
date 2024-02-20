import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuariosDto } from "./dto/usuarios.dto";


@Controller('usuarios')
export class UsuarioController {
	constructor(private usuarioService : UsuariosService) {}

	@Get('')
	getUsers() {
		return this.usuarioService.getUsuarios()
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id:number) {
		return this.usuarioService.findById(id)
	}

	@Post()
	createUsuario(@Body() usuario: CreateUsuariosDto){
		
		return this.usuarioService.createUsuario(usuario)
	}

	@Patch(':id')
	updateUser(
		@Param('id', ParseIntPipe) id:number,
		@Body() usuario:CreateUsuariosDto,
	) {
		return this.usuarioService.editUsuario(id, usuario)
	}

}