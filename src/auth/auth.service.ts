import { JwtService } from "@nestjs/jwt";
import { UsuariosService } from "src/usuarios/usuarios.service";
import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { error } from "console";


@Injectable()
export class AuthService {
	constructor(
		private usuariosService:UsuariosService,
		private jwtService: JwtService
	) {}

	async signIn(usuario: string, pass: string) {
		console.log(usuario);
		const {data} = await this.usuariosService.findByUsuario(usuario);

		
		const isMatch = await bcrypt.compare(pass, data.pass)
	/* 	 console.log(data);
		 console.log(isMatch);
			console.log(pass); */
		if (!isMatch) {
			throw new UnauthorizedException()
		}

		const payload = { ...data}
		delete payload.fhcreacion
		delete payload.pass

		const token = await this.jwtService.signAsync(payload)
		return {
			access_token : token,
		}
	}
}