import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuariosDto } from "./dto/usuarios.dto";


@Controller('usuarios')
export class UsuarioController {
	constructor(private usuarioService : UsuariosService) {}

	@Get('')
	getUsers() {
		return this.usuarioService.getUsuarios
	}

	@Post()
	createAbono(@Body() usuario: CreateUsuariosDto){
		return this.usuarioService.createUsuario(usuario)
	}

}