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
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";

@Module({

	imports: [TypeOrmModule.forFeature([Abono,Contratos,Usuarios,IngresosContratos]), JwtModule],
	controllers: [ AbonosController],
	providers: [ AbonoService],
	exports:[AbonoService]

})
export class AbonosModule {}