import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EgresosContratos } from "./egresoscontratos.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EgresosContratosController } from "./egresoscontrato.controller";
import { EgresosContratosService } from "./egresoscontratos.service";

@Module({

	imports: [ TypeOrmModule.forFeature([EgresosContratos,Contratos]) ],
	controllers: [ EgresosContratosController],
	providers: [ EgresosContratosService],
	exports:[EgresosContratosService]

})

export class EgresosContratosModule {}