import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contratos } from "./contratos.entity";
import { ContratoController } from "./contrato.controller";
import { ContratoService } from "./contrato.service";

import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { Lotes } from "src/Fraccionamiento/lotes/lotes.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { Clientes } from "src/Cliente/clientes/clientes.entity";
import { JwtModule } from "@nestjs/jwt";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { ContratosFracc } from "../contratosFracc/contratosfracc.entity";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([
		Contratos,
		ContratosFracc, 
		Lotes, 
		IngresosContratos ,
		EgresosContratos, 
		EstadoCuentaContrato,
		IngresosFraccionamientos,
		EgresosFraccionamiento,
		Clientes,
		Fraccionamientos,
		EstadoCuentaFraccionamiento
	]),JwtModule ],
	controllers: [ ContratoController],
	providers: [ ContratoService],
	exports:[ContratoService]

})

export class ContratoModule {}