import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Clientes } from "./clientes.entity";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { JwtModule } from "@nestjs/jwt";
import { Contratos } from "src/Contrato/contratos/contratos.entity";




@Module({

	imports: [ TypeOrmModule.forFeature([Clientes,Usuarios,Contratos]),JwtModule ],
	controllers: [ ClientesController],
	providers: [ ClientesService],
	exports:[ClientesService]

})

export class ClientesModule {}