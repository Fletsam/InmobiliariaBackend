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
import { EstadoCuentaInversionista } from "src/EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.entity";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { EgresosInversionista } from "src/Egresoss/egresosinversiones/egresosinversiones.entity";
import { ContratosInversionista } from "../contratosInversionista/contratoinversionista.entity";
import { ContratosProveedores } from "../contratosProveedores/contratosproveedores.entity";
import { Proveedores } from "src/Proveedores/proveedores.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([
	//Contratos Lotes//
		Contratos,
		Lotes, 
		IngresosContratos ,
		EgresosContratos,
		EstadoCuentaContrato, 
	//Contratos Fracc//
		ContratosFracc,
		Fraccionamientos,
		IngresosFraccionamientos,
		EgresosFraccionamiento,
		EstadoCuentaFraccionamiento,
	//Contratos Inv//
		ContratosInversionista, 
		EstadoCuentaInversionista,
		IngresosInversionista,
		EgresosInversionista,	
		Clientes,
	//Contratos Proveedores//
		ContratosProveedores,
		Proveedores
	]),JwtModule ],
	controllers: [ ContratoController],
	providers: [ ContratoService],
	exports:[ContratoService]

})

export class ContratoModule {}