import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GerenciaController } from "../gerencia.controller";
import { GerenciaService } from "../gerencia.service";
import { Gerencia } from "../gerencia.entity";
import { Dias } from "./dias.entity";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { DiasController } from "./dias.controller";
import { DiasService } from "./dias.service";

@Module({

	imports: [ TypeOrmModule.forFeature([Gerencia,Dias,AbonosGerencia]), JwtModule],
	controllers: [ DiasController],
	providers: [ DiasService],
	exports:[DiasService]
})

export class DiasModule {}