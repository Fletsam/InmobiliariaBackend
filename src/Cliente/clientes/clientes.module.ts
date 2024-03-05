import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Clientes } from "./clientes.entity";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";
import { Usuarios } from "src/usuarios/usuarios.entity";




@Module({

	imports: [ TypeOrmModule.forFeature([Clientes,Usuarios]) ],
	controllers: [ ClientesController],
	providers: [ ClientesService],
	exports:[ClientesService]

})

export class ClientesModule {}