import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from "./usuarios.entity";
import { Repository } from "typeorm";
import { CreateUsuariosDto } from "./dto/usuarios.dto";

@Injectable()

export class UsuariosService {

	constructor(
		@InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>	) {}

	async getUsuarios() {
	const usuario = await this.usuarioRepository.find()
	return {data : usuario, status: HttpStatus.OK }
}

	async findOne(id: number) {
    const usuarioFound = await this.usuarioRepository.findOne({
      where: { id },
    });
    if (!usuarioFound) {
      throw new BadRequestException({
        data: null,
        message: 'Session not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return usuarioFound;
  }

  async createUsuario(usuario: CreateUsuariosDto){

	const newUsuarioFlag = { ...usuario, fhcreacion: new Date()}

	const newUsuario = await this.usuarioRepository.create(newUsuarioFlag)
	const usuarioSaved = await this.usuarioRepository.save(newUsuario)

	return{ data:usuarioSaved, status : HttpStatus.OK}
  }



	}	

