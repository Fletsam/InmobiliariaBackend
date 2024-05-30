import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LlamadasController } from "./llamadas.controller";
import { LlamadasService } from "./llamadas.service";
import { Llamadas } from "./llamadas.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Llamadas]), JwtModule],
	controllers: [ LlamadasController],
	providers: [ LlamadasService],
	exports:[LlamadasService]
})

export class LlamadasModule {}