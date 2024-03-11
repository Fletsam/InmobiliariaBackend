import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Area } from "./area.entity";
import { AreaController } from "./area.controller";
import { AreaService } from "./area.service";
import { Funciones } from "./funciones/funciones.entity";




@Module({

	imports: [ TypeOrmModule.forFeature([Area,Funciones]) ],
	controllers: [ AreaController],
	providers: [ AreaService],
	exports:[AreaService]

})

export class AreaModule {}