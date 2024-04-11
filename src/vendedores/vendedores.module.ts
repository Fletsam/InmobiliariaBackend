import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VendedoresService } from "./vendedores.service";
import { Vendedores } from "./vendedores.entity";
import { VendedoresController } from "./vendedores.controller";
import { AbonosVentas } from "src/abonos/abonoventas/abonoventas.entity";

@Module({

	imports: [ TypeOrmModule.forFeature([Vendedores,AbonosVentas]), JwtModule],
	controllers: [ VendedoresController],
	providers: [ VendedoresService],
	exports:[VendedoresService]
})

export class VendedoresModule {}