import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { AbonosController } from "./abonos.controller";
import { AbonoService } from "./abonos.service";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioModule } from "src/usuarios/usuario.module";
import { RfcsModule } from "src/rfcs/rfcs.module";
import { Rfcs } from "src/rfcs/rfcs.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";

@Module({

	imports: [TypeOrmModule.forFeature([Abono,Rfcs]), JwtModule, UsuarioModule , RfcsModule],
	controllers: [ AbonosController],
	providers: [ AbonoService],
	exports:[AbonoService]

})
export class AbonosModule {}