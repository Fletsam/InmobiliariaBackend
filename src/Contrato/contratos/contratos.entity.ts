import { Clientes } from 'src/Cliente/clientes/clientes.entity';
import { IngresosEnganches } from 'src/Ingresoss/ingresosenganches/ingresosenganches.entity';
import { Abono } from 'src/abonos/abono.entity';

import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ContratoAnualidad } from '../contratosanualidad/contratoanualidad.entity';
import { Pagares } from 'src/Pagare/pagares/pagares.entity';
import { ContratosMoratorio } from '../contratosmoratorio/contratosmoratorio.entity';


import { IngresosContratos } from 'src/Ingresoss/ingresoscontratos/ingresoscontratos.entity';
import { EgresosContratos } from 'src/Egresoss/egresoscontratos/egresoscontratos.entity';
import { Lotes } from 'src/Fraccionamiento/lotes/lotes.entity';
import { IngresosFraccionamientos } from 'src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity';
import { Fraccionamientos } from 'src/Fraccionamiento/fraccionamientos/fraccionamientos.entity';

@Entity()
export class Contratos {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  testigo1: string;

  @Column()
  testigo2: string;

  @Column()
  metros2: number;

  @Column()
  preciom2: number;

  @Column()
  costo: number;

  @Column()
  descuento: number;

  @Column()
  enganche: number;

  @Column()
  resto: number;

  @Column()
  pagosafinanciar: number;

  @Column( {type:'float'})
  interesanual: number;

  @Column()
  pagomensual: number

  @Column()
  montototal: number;

  @Column()
  ingresoneto: number
/* 
  @Column()
  abono: number; */

  @Column()
  inicio: Date;

  @Column()
  fecha: Date;
  
  @Column()
  pagado: number;

  @Column()
  estatus: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  /* @Column()
  idmodificacion: number;
 */
/* 
  @Column()
  fhmodificacion: Date; */

  @ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

  @ManyToOne(() => Clientes, (cliente) => cliente.Contratos) 
  clientes : Clientes
  
  @Column()
  clientesId: number;

  @Column()
  comision:number
  
  /* @ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  idmodificacion : Usuarios */

  @Column()
  estadocuentaId : number

  @OneToOne(() => Lotes , (lote) => lote.contratoId )
  @JoinColumn()
  Lote: Lotes
  @Column()
  loteId:number

  
  @OneToMany(() => Abono, (abono) => abono.contrato) 
  Abonos : Abono[]

  /* @OneToMany(() => IngresosFraccionamientos, (ingresosfraccionamientos) => ingresosfraccionamientos.contrato) 
  IngresosFraccionamientos : IngresosFraccionamientos[] */

  @OneToMany(() => IngresosContratos, (ingresoscontratos) => ingresoscontratos.contrato) 
  IngresosContratos : IngresosContratos[]

  @OneToMany(() => EgresosContratos, (egresoscontratos) => egresoscontratos.contrato) 
  EgresosContratos : EgresosContratos[]

  @OneToMany(() => Pagares, (pagares) => pagares.contrato) 
  Pagares : Pagares[]

  @OneToMany(() => ContratoAnualidad, (contratoanualidad) => contratoanualidad.contrato) 
  ContratoAnualidad : ContratoAnualidad[]

  @OneToMany(() => ContratosMoratorio, (contratosmoratorio) => contratosmoratorio.contrato) 
  ContratosMoratorio : ContratosMoratorio[]

}
