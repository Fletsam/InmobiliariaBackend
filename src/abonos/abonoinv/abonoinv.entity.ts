import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { ContratosInversionista } from "src/Contrato/contratosInversionista/contratoinversionista.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosInv {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  formadepago: string

  @Column()
  pago: number;

  @Column()
  credito :  number
  
  @Column()
  concepto :  string

  @Column()
  folio : string

  

  @Column()
  saldo: number

  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;


  @ManyToOne(() => ContratosInversionista, (contratosInversionista) => contratosInversionista.AbonosInv)
  contratosInversionista: ContratosInversionista

  @Column()
  contratosInversionistaId: number

  @ManyToOne(() => Usuarios, (usuario) => usuario.AbonosFracc)
  usuario: Usuarios

  @Column()
  usuarioId:number
  
}