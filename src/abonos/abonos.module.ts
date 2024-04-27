import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { AbonosController } from "./abonos.controller";
import { AbonoService } from "./abonos.service";
import { JwtModule } from "@nestjs/jwt";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { AbonosFracc } from "./abonofracc/abonofracc.entity";
import { AbonosProv } from "./abonoprov/abonoprov.entity";
import { ContratosProveedores } from "src/Contrato/contratosProveedores/contratosproveedores.entity";
import { Vendedores } from "src/vendedores/vendedores.entity";
import { AbonosVentas } from "./abonoventas/abonoventas.entity";
import { Gerencia } from "src/gerencia/gerencia.entity";
import { AbonosGerencia } from "./abonogerencia/abonogerencia.entity";
import { Dias } from "src/gerencia/dias/dias.entity";
import { AbonosNomina } from "./abonosnomina/abonosnomina.entity";
@Module({

	imports: [TypeOrmModule.forFeature([
		Abono,
		Contratos,
		Usuarios,
		IngresosContratos,
		EgresosContratos,
		EstadoCuentaContrato,
		ContratosFracc,
		AbonosFracc,
		AbonosProv,
		ContratosProveedores,
		Vendedores,
		AbonosVentas,
		Gerencia,
		AbonosGerencia,
		Dias,
		AbonosNomina
	]), JwtModule],
	controllers: [ AbonosController],
	providers: [ AbonoService],
	exports:[AbonoService]

})
export class AbonosModule {}