import { Area } from 'src/Area/area.entity';
import { Funciones } from 'src/Area/funciones/funciones.entity';
import { Clientes } from 'src/Cliente/clientes/clientes.entity';
import { ClienteNoInteres } from 'src/Cliente/clientesnointeres/clientesnointeres.entity';
import { Contratos } from 'src/Contrato/contratos/contratos.entity';
import { ContratosFracc } from 'src/Contrato/contratosFracc/contratosfracc.entity';
import { ContratosInversionista } from 'src/Contrato/contratosInversionista/contratoinversionista.entity';
import { ConceptosEgresos } from 'src/Egresoss/conceptosegresos/conceptosegresos.entity';
import { Egresos } from 'src/Egresoss/egresos/egresos.entity';
import { FlujoDiarioFraccionamiento } from 'src/Fraccionamiento/flujodiariofraccionamiento/flujodiariofraccionamiento.entity';
import { Fraccionamientos } from 'src/Fraccionamiento/fraccionamientos/fraccionamientos.entity';
import { Lotes } from 'src/Fraccionamiento/lotes/lotes.entity';
import { Manzanas } from 'src/Fraccionamiento/manzana/manzanas.entity';
import { ConceptosIngresos } from 'src/Ingresoss/conceptosingresos/conceptosingresos.entity';
import { Ingresos } from 'src/Ingresoss/ingresos/ingresos.entity';
import { Inversionistas } from 'src/Inversionistass/inversionistas/inversionistas.entity';
import { Pagares } from 'src/Pagare/pagares/pagares.entity';
import { PagaresCancelados } from 'src/Pagare/pagarescancelados/pagarescancelados.entity';
import { Parcelas } from 'src/Parcela/parcelas/parcelas.entity';
import { ParcelasPenalizacion } from 'src/Parcela/parcelaspenalizacion/parcelaspenalizacion.entity';
import { ParcelasProyectos } from 'src/Parcela/parcelasproyectos/parcelasproyectos.entity';
import { Proyectos } from 'src/Proyecto/proyectos/proyectos.entity';
import { proyectosproyectos } from 'src/Proyecto/proyectosproyectos/proyectosproyectos.entity';
import { Abono } from 'src/abonos/abono.entity';
import { AbonosFracc } from 'src/abonos/abonofracc/abonofracc.entity';
import { Cajas } from 'src/cajas/cajas.entity';
import { Moratorio } from 'src/moratorio/moratorio.entity';
import { Privilegios } from 'src/privilegios/privilegios.entity';

import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id:number

@ManyToOne(()=>  Privilegios ,(privilegios) => privilegios.Usuarios)
  privilegios  : Privilegios
  @Column()
  privilegiosId: number;

@ManyToOne(()=>  Area ,(area) => area.Usuarios)
  area  : Area
  @Column()
  areaId: number;

  @Column()
  usuario: string;
  
  @Column()
  pass: string;
  
  @Column({default:false})
  estatus: boolean;
  
  @Column()
  nombre: string;
  
  @Column()
  titulo:string

  @Column()
  telefono: string;

  @Column()
  curp: string;

  @Column()
  rfc: string;
  
  @Column()
  colonia: string;
  
  @Column()
  calle: string;
  
  @Column()
  numero: string;
  
  @Column()
  cp: string;
  
  @Column()
  correo: string;
  
  @Column()
  estadocivil: string;

  @Column()
  cargo:string

  @Column()
  salario: number

  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;

@OneToMany(() => Abono, (abono) => abono.usuario)
  Abonos: Abono[];

@OneToMany(() => AbonosFracc, (abono) => abono.usuario)
  AbonosFracc: AbonosFracc[];

@OneToMany(() => Inversionistas, (inversionistas) => inversionistas.usuario )
  Inversionistas: Inversionistas[];

@OneToMany(() => Cajas, (cajas) => cajas.usuario)
  Cajas: Cajas[];


@OneToMany(() => Funciones, (funciones) => funciones.usuario)
  Funciones: Funciones[];

  
@OneToMany(() => ConceptosEgresos, (conceptosegresos) => conceptosegresos.usuario)
  ConceptosEgresos: ConceptosEgresos[];

@OneToMany(() => Egresos , (egresos) => egresos.usuario)
  Egresos: Egresos[];

@OneToMany(() => FlujoDiarioFraccionamiento , (flujodiariofraccionamiento) => flujodiariofraccionamiento.usuario)
  FlujoDiarioFraccionamiento: FlujoDiarioFraccionamiento[]; 


@OneToMany(() => ConceptosIngresos, (conceptosingresos) => conceptosingresos.usuario)
  ConceptoIngresos: ConceptosIngresos[];

@OneToMany(() => Moratorio, (moratorio) => moratorio.usuario)
  Moratorio: Moratorio[];

@OneToMany(() => Proyectos, (proyectos) => proyectos.usuario)
  Proyectos: Proyectos[];

@OneToMany(() => proyectosproyectos, (proyectosproyectos) => proyectosproyectos.usuario)
  proyectosproyectos : proyectosproyectos[];

@OneToMany(() => Parcelas, (parcelas) => parcelas.usuario)
  Parcelas : Parcelas[];

@OneToMany(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.usuario)
  Fraccionamientos: Fraccionamientos[];


@OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.usuario)
  ParcelasProyectos : ParcelasProyectos[];
  
@OneToMany(() => ParcelasPenalizacion, (parcelaspenalizacion) => parcelaspenalizacion.usuario)
  ParcelasPenalizacion : ParcelasPenalizacion[];
  
@OneToMany(() => Rfcs, (rfcs) => rfcs.usuario)
  Rfcs : Rfcs[];
  
@OneToMany(() => Manzanas, (manzana) => manzana.usuario)
  Manzanas : Manzanas[];

@OneToMany(() => Lotes, (lotes) => lotes.usuario)
  Lotes : Lotes[];
  
  @OneToMany(() => Ingresos, (ingresos) => ingresos.usuario)
  Ingresos : Ingresos[];

@OneToMany(() => Pagares, (pagares) => pagares.usuario)
 Pagares  : Pagares[];
 

 @OneToMany(() => PagaresCancelados, (pagarescancelados) => pagarescancelados.usuario)
 PagaresCancelados  : PagaresCancelados[];

 @OneToMany(() => Contratos, (contratos) => contratos.usuario)
 Contratos  : Contratos[];

 @OneToMany(() => ContratosFracc, (contratosfracc) => contratosfracc.usuario)
 ContratosFracc  : ContratosFracc[];
 
 @OneToMany(() => ContratosInversionista, (contratoinversionista) => contratoinversionista.usuario)
 ContratosInversionista  : ContratosInversionista[];
 



 @OneToMany(() => Clientes, (clientes) => clientes.usuario)
  Clientes : Clientes[];

  @OneToMany(() => ClienteNoInteres, (clientesnointeres) => clientesnointeres.cliente)
  ClienteNoInteres : ClienteNoInteres[];

}
