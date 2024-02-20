import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LotesController } from "./lotes.controller";
import { LotesService } from "./lotes.service";
import { Lotes } from "./lotes.entity";



@Module({

	imports: [ TypeOrmModule.forFeature([Lotes]) ],
	controllers: [ LotesController],
	providers: [ LotesService],
	exports:[LotesService]

})

export class LotesModule {}