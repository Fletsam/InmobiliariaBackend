import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  ManzanaController } from "./manzanas.controller";
import {  ManzanasService } from "./manzanas.service";
import {  Manzanas } from "./manzanas.entity";
import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";
import { JwtModule } from "@nestjs/jwt";
import { Lotes } from "../lotes/lotes.entity";



@Module({

	imports: [ TypeOrmModule.forFeature([Manzanas,Fraccionamientos,Lotes]),JwtModule ],
	controllers: [ ManzanaController],
	providers: [ ManzanasService],
	exports:[ManzanasService]

})

export class ManzanasModule {}