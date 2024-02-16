import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonosModule } from './abonos/abonos.module';
import { Abono } from './abonos/abono.entity';
import { Rfcs } from './rfcs/rfcs.entity';
import { Usuarios } from './usuarios/usuarios.entity';
import { Cajas } from './cajas/cajas.entity';
import { Clientes } from './clientes/clientes.entity';
import { ClienteNoInteres } from './clientesnointeres/clientesnointeres.entity';
import { ConceptosEgresos } from './conceptosegresos/conceptosegresos.entity';
import { ConceptosIngresos } from './conceptosingresos/conceptosingresos.entity';
import { Contratos } from './contratos/contratos.entity';
import { ContratoAnualidad } from './contratosanualidad/contratoanualidad.entity';
import { ContratosMoratorio } from './contratosmoratorio/contratosmoratorio.entity';
import { Egresos } from './egresos/egresos.entity';
import { EgresosInversiones } from './egresosinversiones/egresosinversiones.entity';
import { EgresosSubConceptos } from './egresossubconceptos/egresossupconceptos.entity';
import { EgresosParcelas } from './egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptosGastos } from './egresossubconceptosgastos/egresossubconceptosgastos.entity';
import { EgresosSubConceptosParcelas } from './egresossubconceptosparcela/egresossubconceptosparcela.entity';
import { EgresosSubConceptosProveedor } from './egresossubconceptosproveedor/egresossubconceptosproveedor';
import { EgresosSubConceptosProyecto } from './egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { Estados } from './estados/estados.entity';
import { Folios } from './folios/folios.entity';
import { IdEstados } from './idestados/idestados.entity';
import { Ingresos } from './ingresos/ingresos.entity';
import { IngresosEnganches } from './ingresosenganches/ingresosenganches.entity';
import { IngresosInversiones } from './ingresosinversiones/ingresosinversiones.entity';
import { IngresosObservaciones } from './ingresosobservaciones/ingresosobservaciones.entity';
import { IngresosOtros } from './ingresosotros/ingresosotros.entity';
import { IngresosPagares } from './ingresospagares/ingresospagares.entity';
import { IngresosProyecto } from './ingresosproyecto/ingresosproyecto.entity';
import { InversionesRendimientos } from './inversionesrendimientos/inversionesrendimientos.entity';
import { Inversionistas } from './inversionistas/inversionistas.entity';
import { MetodosDePago } from './metodosdepago/metodosdepago.entity';
import { Moratorio } from './moratorio/moratorio.entity';
import { Pagares } from './pagares/pagares.entity';
import { PagaresCancelados } from './pagarescancelados/pagarescancelados.entity';
import { Parcelas } from './parcelas/parcelas.entity';
import { ParcelasPenalizacion } from './parcelaspenalizacion/parcelaspenalizacion.entity';
import { ParcelasProyectos } from './parcelasproyectos/parcelasproyectos.entity';
import { Privilegios } from './privilegios/privilegios.entity';
import { proyectosproyectos } from './proyectosproyectos/proyectosproyectos.entity';
import { Proyectos } from './proyectos/proyectos.entity';
import { subconceptoegresos } from './subconceptosegresos/subconceptoegresos.entity';
import { Ticket } from './ticket/ticket.entity';
import { Lotes } from './lotes/lotes.entity';
import { Fraccionamientos } from './fraccionamientos/fraccionamientos.entity';
import { Manzanas } from './manzanas/manzanas.entity';
import { FlujoMensualDeFraccionamientos } from './flujomensualdefraccionamientos/flujomensualdefraccionamientos.entity';
import { UsuarioModule } from './usuarios/usuario.module';
import { RfcsModule } from './rfcs/rfcs.module';

@Module({
  imports: [TypeOrmModule.forRoot({
       type: 'mysql',
        username: 'root',
        password: '1234',
        host: 'localhost',
        port: 3306,
        database: 'inmobiliariathi',
        autoLoadEntities: true,
      entities: [Abono, 
        Cajas,
        Clientes,
        ClienteNoInteres,
        ConceptosEgresos,
        ConceptosIngresos,
        Contratos,
        ContratoAnualidad,
        ContratosMoratorio,
        Egresos,
        EgresosInversiones,
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
        IngresosInversiones,
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
        FlujoMensualDeFraccionamientos
      ],
      synchronize: true,
    }),
    AbonosModule,
    UsuarioModule,
    RfcsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
