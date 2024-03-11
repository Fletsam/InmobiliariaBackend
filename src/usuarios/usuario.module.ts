import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuarios } from "./usuarios.entity";
import { UsuariosService } from "./usuarios.service";
import { UsuarioController } from "./usuario.controller";
import { JwtModule } from "@nestjs/jwt";
import { Area } from "src/Area/area.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Usuarios,Area]), JwtModule],
	controllers: [ UsuarioController],
	providers: [ UsuariosService],
	exports:[UsuariosService]
})

export class UsuarioModule {}