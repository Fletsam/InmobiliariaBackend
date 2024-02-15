import { Abono } from 'src/abonos/abono.endity';
import { Cajas } from 'src/cajas/cajas.entity';
import { Clientes } from 'src/clientes/clientes.entity';
import { ClienteNoInteres } from 'src/clientesnointeres/clientesnointeres.entity';
import { ConceptosEgresos } from 'src/conceptosegresos/conceptosegresos.entity';
import { ConceptosIngresos } from 'src/conceptosingresos/conceptosingresos.entity';
import { Contratos } from 'src/contratos/contratos.entity';
import { Egresos } from 'src/egresos/egresos.entity';
import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Inversionistas } from 'src/inversionistas/inversionistas.entity';
import { Moratorio } from 'src/moratorio/moratorio.entity';
import { Pagares } from 'src/pagares/pagares.entity';
import { PagaresCancelados } from 'src/pagarescancelados/pagarescancelados.entity';
import { Parcelas } from 'src/parcelas/parcelas.entity';
import { ParcelasPenalizacion } from 'src/parcelaspenalizacion/parcelaspenalizacion.entity';
import { ParcelasProyectos } from 'src/parcelasproyectos/parcelasproyectos.entity';
import { Privilegios } from 'src/privilegios/privilegios.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { proyectosproyectos } from 'src/proyectosproyectos/proyectosproyectos.entity';
import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Usuarios {
  /* @PrimaryGeneratedColumn()
  idusuario: number; */

@ManyToOne(()=>  Privilegios ,(privilegios) => privilegios.Usuarios)
  idusuario  : Privilegios

  @Column()
  nombre: string;

  @Column()
  usuario: string;

  @Column()
  pass: string;

  @Column()
  estatus: number;

  @Column()
  idcreacion:number

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;


  


  @OneToMany(() => Abono, (abono) => abono.idcreacion)
  Abonos: Abono[];

  @OneToMany(() => Inversionistas, (inversionistas) => inversionistas.idcreacion )
  Inversionistas: Inversionistas[];

  @OneToMany(() => Cajas, (cajas) => cajas.idcreacion)
  Cajas: Cajas[];

  
  @OneToMany(() => ConceptosEgresos, (conceptosegresos) => conceptosegresos.idcreacion)
  ConceptosEgresos: ConceptosEgresos[];

  @OneToMany(() => Egresos , (egresos) => egresos.idcreacion)
  Egresos: Egresos[];

   
@OneToMany(() => ConceptosIngresos, (conceptosingresos) => conceptosingresos.idcreacion)
  ConceptoIngresos: ConceptosIngresos[];

@OneToMany(() => Moratorio, (moratorio) => moratorio.idcreacion)
  Moratorio: Moratorio[];

@OneToMany(() => Proyectos, (proyectos) => proyectos.idcreacion)
  Proyectos: Proyectos[];

@OneToMany(() => proyectosproyectos, (proyectosproyectos) => proyectosproyectos.idcreacion)
  proyectosproyectos : proyectosproyectos[];

@OneToMany(() => Parcelas, (parcelas) => parcelas.idcreacion)
  Parcelas : Parcelas[];

@OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.idcreacion)
  ParcelasProyectos : ParcelasProyectos[];
  
@OneToMany(() => ParcelasPenalizacion, (parcelaspenalizacion) => parcelaspenalizacion.idcreacion)
  ParcelasPenalizacion : ParcelasPenalizacion[];
  
@OneToMany(() => Rfcs, (rfcs) => rfcs.idcreacion)
  Rfcs : Rfcs[];
  

  
  @OneToMany(() => Ingresos, (ingresos) => ingresos.idcreacion)
  Ingresos : Ingresos[];

@OneToMany(() => Pagares, (pagares) => pagares.idcreacion)
 Pagares  : Pagares[];
 
 @OneToMany(() => Contratos, (contratos) => contratos.idcreacion)
 Contratos  : Contratos[];
 
 @OneToMany(() => Clientes, (clientes) => clientes.idcreacion)
  Clientes : Clientes[];

  @OneToMany(() => ClienteNoInteres, (clientesnointeres) => clientesnointeres.idcreacion)
  ClienteNoInteres : ClienteNoInteres[];

}
