import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GerenciaController } from "./gerencia.controller";
import { GerenciaService } from "./gerencia.service";
import { Gerencia } from "./gerencia.entity";
import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Gerencia,AbonosGerencia]), JwtModule],
	controllers: [ GerenciaController],
	providers: [ GerenciaService],
	exports:[GerenciaService]
})

export class GerenciaModule {}