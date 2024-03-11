import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from "./usuarios.entity";
import { Repository } from "typeorm";
import { CreateUsuariosDto } from "./dto/usuarios.dto";
import * as bcrypt from 'bcrypt';
import { Area } from "src/Area/area.entity";


@Injectable()

export class UsuariosService {

	constructor(
		@InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,  
    	) {}

	async getUsuarios() {
	const usuario = await this.usuarioRepository.find(
    {relations: ["Rfcs",]}
  )
	return {data : usuario, status: HttpStatus.OK }
}

	async findById(id: number) {
    const usuarioFound = await this.usuarioRepository.findOne({
      where: { id }, relations : ["area", "Funciones"]   
    });
    
    
    if (!usuarioFound) {
      throw new BadRequestException({
        data: null,
        message: 'Usuario no encontrado',
        status: HttpStatus.NOT_FOUND,
      });
    }
    delete usuarioFound.pass
    return usuarioFound;
  }

async findByUsuario(usuario: string) {
    const userFound = await this.usuarioRepository.findOne({
      where: { usuario },
    });
    if (!userFound) {
      throw new BadRequestException({
        data: null,
        message: 'Usuario no encontrado',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return { data: userFound, status: HttpStatus.OK };
  }


  async createUsuario(usuario: CreateUsuariosDto){
  const hasPass = await bcrypt.hash(usuario.pass, 10)
	const newUsuarioFlag = { ...usuario, fhcreacion: new Date(), pass:hasPass}

	const newUsuario = await this.usuarioRepository.create(newUsuarioFlag)
	const usuarioSaved = await this.usuarioRepository.save(newUsuario)
  delete usuarioSaved.pass;
	return{ data:usuarioSaved, status : HttpStatus.OK}
  }

  async editUsuario( id:number , usuario : CreateUsuariosDto){
    await this.findById(id)
    const usuarioFlag = {...usuario}
    if(usuario.pass) {
      const hasPass = await bcrypt.hash(usuario.pass, 10)
      usuarioFlag.pass = hasPass
    }
    const updatedUser = await this.usuarioRepository.update(
      {id},
      {...usuarioFlag},
    )
    if (updatedUser.affected === 0) {
      throw new BadRequestException( {
        data: null , 
        message : "No se ha podido actualizar el usuario",
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      })
    }
    delete usuarioFlag.pass
    return { data : usuarioFlag , status: HttpStatus.OK }
  }


	}	

