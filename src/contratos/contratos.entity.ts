import { ContratoAnualidad } from 'src/contratosanualidad/contratoanualidad.entity';
import { ContratosMoratorio } from 'src/contratosmoratorio/contratosmoratorio.entity';
import { IngresosEnganches } from 'src/ingresosenganches/ingresosenganches.entity';
import { Pagares } from 'src/pagares/pagares.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Contratos {
  @PrimaryGeneratedColumn()
  idcontrato: number;

  @Column()
  idcliente: number;

  @Column()
  idproyecto: number;

  @Column()
  calle: string;

  @Column()
  numeroext: string;

  @Column()
  numeroint: string;

  @Column()
  colonia: string;

  @Column()
  cp: string;

  @Column()
  ciudad: string;

  @Column()
  idestados: number;

  @Column()
  ocupacion: string;

  @Column()
  estadocivil: string;

  @Column()
  lote: string;

  @Column()
  manzana: string;

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
  pagos: number;

  @Column()
  interesanual: number;

  @Column()
  monto: number;

  @Column()
  abono: number;

  @Column()
  inicio: Date;

  @Column()
  fecha: Date;

  @Column()
  testigo1: string;

  @Column()
  testigo2: string;

  @Column()
  pagado: number;

  @Column()
  estatus: number;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  /* @Column()
  idmodificacion: number;
 */
  @Column()
  fhmodificacion: Date;

   @OneToMany(() => IngresosEnganches, (ingresosenganches) => ingresosenganches.idcontrato) 
  IngresosEnganches : IngresosEnganches[]

@OneToMany(() => Pagares, (pagares) => pagares.idcontrato) 
  Pagares : Pagares[]

  @OneToMany(() => ContratoAnualidad, (contratoanualidad) => contratoanualidad.idcontrato) 
  ContratoAnualidad : ContratoAnualidad[]

@OneToMany(() => ContratosMoratorio, (contratosmoratorio) => contratosmoratorio.idcontrato) 
  ContratosMoratorio : ContratosMoratorio[]

@ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  idcreacion : Usuarios
  
  @ManyToOne(() => Usuarios, (usuario) => usuario.Contratos) 
  idmodificacion : Usuarios

}
