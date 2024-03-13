import { Clientes } from "src/Cliente/clientes/clientes.entity";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { Abono } from "src/abonos/abono.entity";
import { AbonosFracc } from "src/abonos/abonofracc/abonofracc.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContratosFracc {
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

  @Column()
  comision:number

  @Column( {type:'float'})
  interesanual: number;

  @Column()
  pagomensual: number

  @Column()
  montototal: number;

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

  @ManyToOne(() => Usuarios, (usuario) => usuario.ContratosFracc) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

 /*  @Column()
  estadocuentaId : number */


  @OneToOne(() => Fraccionamientos , (fraccionamientos) => fraccionamientos.contratosFracc )
  @JoinColumn()
  Fraccionamiento: Fraccionamientos
  @Column()
  fraccionamientoId:number


  @OneToMany(() => AbonosFracc, (abono) => abono.contratosFracc) 
  AbonosFracc : AbonosFracc[]

  @OneToMany(() => IngresosFraccionamientos, (ingresosfraccionamientos) => ingresosfraccionamientos.contratosFracc) 
  IngresosFraccionamientos : IngresosFraccionamientos[]

  @OneToMany(() => EgresosFraccionamiento, (egresosfraccionamiento) => egresosfraccionamiento.contratosFracc) 
  EgresosFraccionamiento : EgresosFraccionamiento[]

	
}