import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  ManzanaController } from "./manzanas.controller";
import {  ManzanasService } from "./manzanas.service";
import {  Manzanas } from "./manzanas.entity";



@Module({

	imports: [ TypeOrmModule.forFeature([Manzanas]) ],
	controllers: [ ManzanaController],
	providers: [ ManzanasService],
	exports:[ManzanasService]

})

export class ManzanasModule {}