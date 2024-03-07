import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EstadoCuentaFraccionamientoController } from "./estadocuenta.controller";
import { EstadoCuentaContratoService } from "../EstadoCuentaContrato/estadocuentacontrato.service";
import { EstadoCuentaFraccionamiento } from "./estadocuentafraccionamiento.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EstadoCuentaFraccionamientoService } from "./estadocuentafraccionamiento.service";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
	imports: [ TypeOrmModule.forFeature([EstadoCuentaFraccionamiento,
		IngresosFraccionamientos,
		EgresosFraccionamiento,
		Contratos,
		Fraccionamientos]),JwtModule ],
	controllers: [ EstadoCuentaFraccionamientoController],
	providers: [ EstadoCuentaFraccionamientoService],
	exports:[EstadoCuentaFraccionamientoService]

})


export class EstadoCuentaFraccionamientoModule {}