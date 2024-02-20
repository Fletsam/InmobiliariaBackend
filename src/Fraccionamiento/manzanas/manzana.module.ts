import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ManzanaController } from "./manzanas.controller";
import { ManzanaService } from "./manzana.service";
import { Manzanas } from "./manzanas.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Manzanas]) ],
	controllers: [ ManzanaController],
	providers: [ ManzanaService],
	exports:[ManzanaService]

})


export class ManzanaModule {}