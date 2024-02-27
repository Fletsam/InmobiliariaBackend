import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LotesController,  } from "./lotes.controller";
import { LotesService,  } from "./lotes.service";

import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";

import { Lotes } from "./lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";


@Module({

	imports: [ TypeOrmModule.forFeature([Manzanas,Lotes, Fraccionamientos]) ],
	controllers: [ LotesController],
	providers: [ LotesService],
	exports:[LotesService]

})


export class LotesModule {}