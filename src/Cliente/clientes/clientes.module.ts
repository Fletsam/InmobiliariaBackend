import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Clientes } from "./clientes.entity";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";




@Module({

	imports: [ TypeOrmModule.forFeature([Clientes]) ],
	controllers: [ ClientesController],
	providers: [ ClientesService],
	exports:[ClientesService]

})

export class ClientesModule {}