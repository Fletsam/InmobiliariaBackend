import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EstadoCuentaContratoController } from "./estadocuentacontrato.controller";
import { EstadoCuentaContratoService } from "./estadocuentacontrato.service";
import { EstadoCuentaContrato } from "./estadocuentacontrato.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([EstadoCuentaContrato, IngresosContratos, EgresosContratos,Contratos]) ],
	controllers: [ EstadoCuentaContratoController],
	providers: [ EstadoCuentaContratoService],
	exports:[EstadoCuentaContratoService]

})


export class EstadoCuentaContratoModule {}