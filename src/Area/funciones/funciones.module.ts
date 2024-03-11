import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Funciones } from "./funciones.entity";
import { FuncionesController } from "./funciones.controller";
import { FuncionesService } from "./funciones.service";
import { JwtModule } from "@nestjs/jwt";

@Module({

	imports: [ TypeOrmModule.forFeature([Funciones]),JwtModule ],
	controllers: [ FuncionesController],
	providers: [ FuncionesService],
	exports:[FuncionesService]

})

export class FuncionesModule {
	
}