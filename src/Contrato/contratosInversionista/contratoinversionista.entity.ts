import { Clientes } from "src/Cliente/clientes/clientes.entity";
import { EgresosInversionista } from "src/Egresoss/egresosinversiones/egresosinversiones.entity";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { AbonosInv } from "src/abonos/abonoinv/abonoinv.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import{ Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContratosInversionista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string
		
  @Column()
  testigo1: string;

  @Column()
  testigo2: string;

  @Column()
  monto: number;

  @Column()
  pagosafinanciar: number;

  @Column()
  comision:number

  @Column( {type:'float'})
  interesanual: number;
  
  @Column( {type:'float'})
  interesmensual: number;

  @Column()
  pagomensual: number

  @Column()
  montototal: number;

  @Column()
  montodeintereses:number

  @Column()
  utilidad:number

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

  @ManyToOne(() => Usuarios, (usuario) => usuario.ContratosInversionista) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

  @ManyToOne(() => Clientes, (cliente) => cliente.ContratosInversionista) 
  cliente : Clientes

  @Column()
  clienteId: number;

 /*  @Column()
  estadocuentaId : number */


  /* @OneToOne(() => Clientes , (fraccionamientos) => fraccionamientos.contratosFracc )
  @JoinColumn()
  Fraccionamiento: Fraccionamientos
  @Column()
  fraccionamientoId:number */


  @OneToMany(() => AbonosInv, (abono) => abono.contratosInversionista) 
  AbonosInv : AbonosInv[]

  @OneToMany(() => IngresosInversionista, (ingresosinversionista) => ingresosinversionista.ContratosInversionista) 
  IngresosInversionista : IngresosInversionista[]

  @OneToMany(() => EgresosInversionista, (egresosinversiones) => egresosinversiones.ContratosInversionista) 
  EgresosInversionista : EgresosInversionista[]

	
}