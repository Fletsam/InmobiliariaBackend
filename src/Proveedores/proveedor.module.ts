import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { JwtModule } from "@nestjs/jwt";
import { Area } from "src/Area/area.entity";
import { Proveedores } from "./proveedores.entity";
import { ProveedorService } from "./proveedor.service";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { ProveedorController } from "./proveedor.controller";

@Module({

	imports: [ TypeOrmModule.forFeature([Proveedores,Usuarios]), JwtModule],
	controllers: [ ProveedorController],
	providers: [ ProveedorService],
	exports:[ProveedorService]
})

export class ProveedorModule {}