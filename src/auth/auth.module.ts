import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioModule } from "src/usuarios/usuario.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";


@Module({
	imports: [
		JwtModule.registerAsync({
			imports:[ConfigModule],
			inject:[ConfigService],
			useFactory: (configService: ConfigService) => {
				return{
					secret: configService.get('JWT_SECRET'),
					signOptions: {
						expiresIn: configService.get('JWT_EXPIRES_IN') || '1d',
					}
				}
			}
		}),
		UsuarioModule
	],
controllers: [AuthController],
  providers: [AuthService, UsuarioModule],
  exports: [AuthService],
})



export class AuthModule {}