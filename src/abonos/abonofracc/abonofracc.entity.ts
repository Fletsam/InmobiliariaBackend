import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosFracc {
  
  @PrimaryGeneratedColumn()
  id: number;


  @Column(  {default: 0}  )
  montoingreso: number;

  @Column(  {default:0}  )
  penalizacion: number;

  @Column()
  concepto: string

  @Column()
  formadepago: string

  @Column()
  saldo:number

  @Column()
  folio:string

  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;


  @ManyToOne(() => ContratosFracc, (contratosfracc) => contratosfracc.AbonosFracc)
  contratosFracc: ContratosFracc

  @Column()
  contratosFraccId: number

  @ManyToOne(() => Usuarios, (usuario) => usuario.AbonosFracc)
  usuario: Usuarios

  @Column()
  usuarioId:number
  
}