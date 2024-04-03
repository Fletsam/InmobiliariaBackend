import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { ContratosProveedores } from "src/Contrato/contratosProveedores/contratosproveedores.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosProv {
  
  @PrimaryGeneratedColumn()
  id: number;


  @Column(  {default: 0}  )
  montoingreso: number;

  @Column(  {default:0}  )
  credito: number;

  @Column()
  concepto: string

  @Column()
  formadepago: string

  @Column()
  saldo:number


  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;


  @ManyToOne(() => ContratosProveedores, (contratosproveedores) => contratosproveedores.AbonosProv)
  contratosProveedores: ContratosProveedores

  @Column()
  contratosProveedoresId: number

  @ManyToOne(() => Usuarios, (usuario) => usuario.AbonosProv)
  usuario: Usuarios

  @Column()
  usuarioId:number
  
}