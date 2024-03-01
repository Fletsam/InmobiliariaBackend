import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { createAuthDto } from "./dto/auth.dto";



@Controller('auth')
export class AuthController {
	constructor(private authService : AuthService){}

	@Post('login')
	async login(@Body() auth:createAuthDto ){
		return{ 
			data:{
				...(await this.authService.signIn(auth.usuario ,auth.pass))
			},
			status:HttpStatus.OK
		}
	}

}