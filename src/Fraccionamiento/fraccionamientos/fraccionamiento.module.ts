import { Module } from "@nestjs/common";
import { Fraccionamientos } from "./fraccionamientos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FraccionamientoCrontroller } from "./fraccionamiento.controller";
import { FraccionamientoService } from "./fraccionamiento.service";
import { Lotes } from "../lotes/lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";




@Module({

	imports: [ TypeOrmModule.forFeature([
		Fraccionamientos,
		Lotes,
		Manzanas,
		EstadoCuentaFraccionamiento, 
		EgresosFraccionamiento,
		IngresosFraccionamientos,
		Usuarios,
	]) ],
	controllers: [ FraccionamientoCrontroller],
	providers: [ FraccionamientoService],
	exports:[FraccionamientoService]

})



export class FraccionamientoModule{}