import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { AbonosController } from "./abonos.controller";
import { AbonoService } from "./abonos.service";

@Module({

	imports: [ TypeOrmModule.forFeature([Abono]),],
	controllers: [ AbonosController],
	providers: [ AbonoService],
	exports:[AbonoService]

})
export class AbonosModule {}