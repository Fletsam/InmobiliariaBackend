import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonosModule } from './abonos/abonos.module';
import { Abono } from './abonos/abono.entity';
import { Rfcs } from './rfcs/rfcs.entity';
import { Usuarios } from './usuarios/usuarios.entity';
import { Cajas } from './cajas/cajas.entity';
import { UsuarioModule } from './usuarios/usuario.module';
import { RfcsModule } from './rfcs/rfcs.module';
import { PrivilegiosModule } from './privilegios/privilegios.module';
import { ConfigModule } from '@nestjs/config';

import * as Joi from 'joi';
import config from './config';
import { AuthModule } from './auth/auth.module';
import { Clientes } from './Cliente/clientes/clientes.entity';
import { ClienteNoInteres } from './Cliente/clientesnointeres/clientesnointeres.entity';
import { ConceptosEgresos } from './Egresoss/conceptosegresos/conceptosegresos.entity';
import { ConceptosIngresos } from './Ingresoss/conceptosingresos/conceptosingresos.entity';
import { Contratos } from './Contrato/contratos/contratos.entity';
import { ContratoAnualidad } from './Contrato/contratosanualidad/contratoanualidad.entity';
import { ContratosMoratorio } from './Contrato/contratosmoratorio/contratosmoratorio.entity';
import { Egresos } from './Egresoss/egresos/egresos.entity';
import { EgresosSubConceptos } from './Egresoss/egresossubconceptos/egresossupconceptos.entity';
import { EgresosParcelas } from './Egresoss/egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptosGastos } from './Egresoss/egresossubconceptosgastos/egresossubconceptosgastos.entity';
import { EgresosSubConceptosParcelas } from './Egresoss/egresossubconceptosparcela/egresossubconceptosparcela.entity';
import { EgresosSubConceptosProveedor } from './Egresoss/egresossubconceptosproveedor/egresossubconceptosproveedor';
import { EgresosSubConceptosProyecto } from './Egresoss/egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { Estados } from './estados/estados.entity';
import { Folios } from './folios/folios.entity';
import { IdEstados } from './estados/idestados/idestados.entity';
import { Ingresos } from './Ingresoss/ingresos/ingresos.entity';
import { IngresosEnganches } from './Ingresoss/ingresosenganches/ingresosenganches.entity';
import { IngresosObservaciones } from './Ingresoss/ingresosobservaciones/ingresosobservaciones.entity';
import { IngresosOtros } from './Ingresoss/ingresosotros/ingresosotros.entity';
import { IngresosPagares } from './Ingresoss/ingresospagares/ingresospagares.entity';
import { IngresosProyecto } from './Ingresoss/ingresosproyecto/ingresosproyecto.entity';
import { InversionesRendimientos } from './Inversionistass/inversionesrendimientos/inversionesrendimientos.entity';
import { Inversionistas } from './Inversionistass/inversionistas/inversionistas.entity';
import { MetodosDePago } from './Ingresoss/metodosdepago/metodosdepago.entity';
import { Moratorio } from './moratorio/moratorio.entity';
import { Pagares } from './Pagare/pagares/pagares.entity';
import { PagaresCancelados } from './Pagare/pagarescancelados/pagarescancelados.entity';
import { Parcelas } from './Parcela/parcelas/parcelas.entity';
import { ParcelasPenalizacion } from './Parcela/parcelaspenalizacion/parcelaspenalizacion.entity';
import { ParcelasProyectos } from './Parcela/parcelasproyectos/parcelasproyectos.entity';
import { Privilegios } from './privilegios/privilegios.entity';
import { proyectosproyectos } from './Proyecto/proyectosproyectos/proyectosproyectos.entity';
import { Proyectos } from './Proyecto/proyectos/proyectos.entity';
import { subconceptoegresos } from './Egresoss/subconceptosegresos/subconceptoegresos.entity';
import { Ticket } from './ticket/ticket.entity';
import { Fraccionamientos } from './Fraccionamiento/fraccionamientos/fraccionamientos.entity';

import { CarteraClientes } from './Cliente/carteraclientes/carteraclientes.entity';
import { FlujoDiarioFraccionamiento } from './Fraccionamiento/flujodiariofraccionamiento/flujodiariofraccionamiento.entity';
import { FlujoPorFraccionamiento } from './Fraccionamiento/flujoporfraccionamiento/flujoporfraccionamiento.entity';
import { Anualidad } from './Cliente/anualidad/anualidad.entity';
import { FraccionamientoModule } from './Fraccionamiento/fraccionamientos/fraccionamiento.module';
import { ClientesModule } from './Cliente/clientes/clientes.module';
import { ContratoModule } from './Contrato/contratos/contratos.module';
import { IngresosContratosModule } from './Ingresoss/ingresoscontratos/ingresoscontratos.module';
import { IngresosContratos } from './Ingresoss/ingresoscontratos/ingresoscontratos.entity';
import { EstadoCuentaContrato } from './EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity';
import { EgresosContratos } from './Egresoss/egresoscontratos/egresoscontratos.entity';
import { EstadoCuentaContratoModule } from './EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.module';
import { LotesModule } from './Fraccionamiento/lotes/lotes.module';
import { ManzanasModule } from './Fraccionamiento/manzana/manzanas.module';
import { Manzanas } from './Fraccionamiento/manzana/manzanas.entity';
import { Lotes } from './Fraccionamiento/lotes/lotes.entity';
import { IngresosFraccionamientos } from './Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity';
import { EgresosFraccionamiento } from './Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity';
import { EstadoCuentaFraccionamiento } from './EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity';
import { EstadoCuentaFraccionamientoModule } from './EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.module';
import { Area } from './Area/area.entity';
import { Funciones } from './Area/funciones/funciones.entity';
import { FuncionesModule } from './Area/funciones/funciones.module';
import { AreaModule } from './Area/area.module';
import { ContratosFracc } from './Contrato/contratosFracc/contratosfracc.entity';
import { IngresosInversionista } from './Ingresoss/ingresosinversiones/ingresosinversiones.entity';
import { EgresosInversionista } from './Egresoss/egresosinversiones/egresosinversiones.entity';
import { ContratosInversionista } from './Contrato/contratosInversionista/contratoinversionista.entity';
import { EstadoCuentaInversionista } from './EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.entity';
import { EstadoCuentaInversionistaModule } from './EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.module';
import { AbonosInvModule } from './abonos/abonoinv/abonoinv.module';
import { AbonosInv } from './abonos/abonoinv/abonoinv.entity';
import { AbonosFracc } from './abonos/abonofracc/abonofracc.entity';
import { Proveedores } from './Proveedores/proveedores.entity';
import { ContratosProveedores } from './Contrato/contratosProveedores/contratosproveedores.entity';
import { ProveedorModule } from './Proveedores/proveedor.module';
import { Vendedores } from './vendedores/vendedores.entity';
import { AbonosVentas } from './abonos/abonoventas/abonoventas.entity';
import { VendedoresModule } from './vendedores/vendedores.module';

@Module({
  imports: 
  [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
      }),
    }),
    
    TypeOrmModule.forRoot({
       type: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: 3306,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
      entities: [
        Abono, 
        Cajas,
        Clientes,
        ClienteNoInteres,
        ConceptosEgresos,
        ConceptosIngresos,
        Contratos,
        ContratoAnualidad,
        ContratosMoratorio,
        Egresos,
        EgresosInversionista,
        EgresosSubConceptos,
        EgresosParcelas,
        EgresosSubConceptosGastos,
        EgresosSubConceptosParcelas,
        EgresosSubConceptosProveedor,
        EgresosSubConceptosProyecto,
        Estados,
        Folios,
        IdEstados,
        Ingresos,
        IngresosEnganches,
        IngresosInversionista,
        IngresosObservaciones,
        IngresosOtros,
        IngresosPagares,
        IngresosProyecto,
        InversionesRendimientos,
        Inversionistas,
        MetodosDePago,
        Moratorio,
        Pagares,
        PagaresCancelados,
        Parcelas,
        ParcelasPenalizacion,
        ParcelasProyectos,
        Privilegios,
        proyectosproyectos,
        Proyectos,
        Rfcs,
        subconceptoegresos,
        Ticket,
        Usuarios,
        Lotes,
        Fraccionamientos,
        Manzanas,
        CarteraClientes,
        FlujoDiarioFraccionamiento,
        FlujoPorFraccionamiento,
        Anualidad,
        IngresosContratos,
        EstadoCuentaContrato,
        EgresosContratos,
        IngresosFraccionamientos,
        EgresosFraccionamiento,
        EstadoCuentaFraccionamiento,
        Area,
        Funciones,
        ContratosFracc,
        ContratosInversionista,
        EstadoCuentaInversionista,
        AbonosInv,
        AbonosFracc,
        Proveedores,
        ContratosProveedores,
        Vendedores,
        AbonosVentas
      ],
      synchronize: true,
    }),
    AbonosModule,
    UsuarioModule,
    RfcsModule,
    PrivilegiosModule,
    AuthModule,
    FraccionamientoModule,
    LotesModule,
    ManzanasModule,
    ClientesModule,
    ContratoModule,
    IngresosContratosModule,
    EstadoCuentaContratoModule,
    EstadoCuentaFraccionamientoModule,
    EstadoCuentaInversionistaModule,
    FuncionesModule,
    AreaModule,
    AbonosInvModule,
    ProveedorModule,
    VendedoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
