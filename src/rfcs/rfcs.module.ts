import { TypeOrmModule } from "@nestjs/typeorm";
import { Rfcs } from "./rfcs.entity";
import { RfcsService } from "./rfcs.service";
import { RfcsController } from "./rfcs.controller";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AbonosModule } from "src/abonos/abonos.module";
import { UsuarioModule } from "src/usuarios/usuario.module";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { Abono } from "src/abonos/abono.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Rfcs,Abono]),UsuarioModule ],
	controllers: [ RfcsController],
	providers: [ RfcsService],
	exports:[RfcsService]

})

export class RfcsModule {}