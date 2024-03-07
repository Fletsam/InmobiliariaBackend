import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LotesController,  } from "./lotes.controller";
import { LotesService,  } from "./lotes.service";

import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";

import { Lotes } from "./lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { JwtModule } from "@nestjs/jwt";


@Module({

	imports: [ TypeOrmModule.forFeature([Manzanas,Lotes, Fraccionamientos, Contratos]),JwtModule ],
	controllers: [ LotesController],
	providers: [ LotesService],
	exports:[LotesService]

})


export class LotesModule {}