import { Clientes } from 'src/Cliente/clientes/clientes.entity';
import { IngresosEnganches } from 'src/Ingresoss/ingresosenganches/ingresosenganches.entity';
import { Abono } from 'src/abonos/abono.entity';

import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ContratoAnualidad } from '../contratosanualidad/contratoanualidad.entity';
import { Pagares } from 'src/Pagare/pagares/pagares.entity';
import { ContratosMoratorio } from '../contratosmoratorio/contratosmoratorio.entity';

@Entity()
export class Contratos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lote: string;

  @Column()
  manzana: string;

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
  pagosafinanciar: string;

  @Column()
  interesanual: number;

  @Column()
  montototal: number;
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

  @Column()
  fhmodificacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  usuario : Usuarios

  @Column()
  	usuarioId: string;

  @ManyToOne(() => Clientes, (cliente) => cliente.Contratos) 
  clientes : Clientes
  
  @Column()
  	clientesId: string;
  
  /* @ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  idmodificacion : Usuarios */

  @OneToMany(() => Abono, (abono) => abono.contrato) 
  Abonos : Abono[]


  @OneToMany(() => IngresosEnganches, (ingresosenganches) => ingresosenganches.contrato) 
  IngresosEnganches : IngresosEnganches[]


  @OneToMany(() => Pagares, (pagares) => pagares.contrato) 
  Pagares : Pagares[]

  @OneToMany(() => ContratoAnualidad, (contratoanualidad) => contratoanualidad.contrato) 
  ContratoAnualidad : ContratoAnualidad[]

  @OneToMany(() => ContratosMoratorio, (contratosmoratorio) => contratosmoratorio.contrato) 
  ContratosMoratorio : ContratosMoratorio[]


}
