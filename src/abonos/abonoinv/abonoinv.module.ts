import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AbonosInv } from "./abonoinv.entity";
import { ContratosInversionista } from "src/Contrato/contratosInversionista/contratoinversionista.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { JwtModule } from "@nestjs/jwt";
import { AbonosInvController } from "./abonosinv.controller";
import { AbonoInvService } from "./abonoinv.service";

@Module({

	imports: [TypeOrmModule.forFeature([
		AbonosInv,
		ContratosInversionista,
		Usuarios,
		IngresosInversionista,
	]), JwtModule],
	controllers: [ AbonosInvController],
	providers: [ AbonoInvService],
	exports:[AbonoInvService]

})
export class AbonosInvModule {}