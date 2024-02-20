import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Privilegios } from "./privilegios.entity";
import { PrivilegiosController } from "./privilegios.controller";
import { PrivilegiosService } from "./privilegios.service";


@Module({

	imports: [ TypeOrmModule.forFeature([Privilegios]),],
	controllers: [ PrivilegiosController],
	providers: [ PrivilegiosService],
	exports:[PrivilegiosService]
})



export class PrivilegiosModule {}