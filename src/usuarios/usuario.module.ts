import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuarios } from "./usuarios.entity";
import { UsuariosService } from "./usuarios.service";
import { UsuarioController } from "./usuario.controller";

@Module({

	imports: [ TypeOrmModule.forFeature([Usuarios]),],
	controllers: [ UsuarioController],
	providers: [ UsuariosService],
	exports:[UsuariosService]
})

export class UsuarioModule {}