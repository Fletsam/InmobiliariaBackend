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

@Module({

	imports: [ TypeOrmModule.forFeature([
		Contratos, 
		Lotes, 
		IngresosContratos ,
		EgresosContratos, 
		EstadoCuentaContrato,
		IngresosFraccionamientos,
	]) ],
	controllers: [ ContratoController],
	providers: [ ContratoService],
	exports:[ContratoService]

})

export class ContratoModule {}