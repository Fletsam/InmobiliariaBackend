import { Module } from "@nestjs/common";
import { Fraccionamientos } from "./fraccionamientos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FraccionamientoCrontroller } from "./fraccionamiento.controller";
import { FraccionamientoService } from "./fraccionamiento.service";



@Module({

	imports: [ TypeOrmModule.forFeature([Fraccionamientos]) ],
	controllers: [ FraccionamientoCrontroller],
	providers: [ FraccionamientoService],
	exports:[FraccionamientoService]

})



export class FraccionamientoModule{}