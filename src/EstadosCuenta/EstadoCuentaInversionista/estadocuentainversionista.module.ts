import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EstadoCuentaInversionistaController } from "./estadocuentainversionista.controller";
import { EstadoCuentaInversionistaService } from "./estadocuentainversionista.service";
import { EstadoCuentaInversionista } from "./estadocuentainversionista.entity";

@Module({
	imports: [ TypeOrmModule.forFeature([EstadoCuentaInversionista]),JwtModule ],
	controllers: [ EstadoCuentaInversionistaController],
	providers: [ EstadoCuentaInversionistaService],
	exports:[EstadoCuentaInversionistaService]

})


export class EstadoCuentaInversionistaModule {}