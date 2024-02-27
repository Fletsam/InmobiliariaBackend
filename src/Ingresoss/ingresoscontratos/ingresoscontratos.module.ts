import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IngresosContratosController } from "./ingresoscontratos.controller";
import { IngresosContratosService } from "./ingresoscontratos.service";
import { IngresosContratos } from "./ingresoscontratos.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { Abono } from "src/abonos/abono.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([IngresosContratos, Contratos, Abono]) ],
	controllers: [ IngresosContratosController],
	providers: [ IngresosContratosService],
	exports:[IngresosContratosService]

})
export class IngresosContratosModule {}