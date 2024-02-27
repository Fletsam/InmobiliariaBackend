import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, CreateDateColumn, PrimaryGeneratedColumn, Column,ManyToOne } from 'typeorm';
import { Contratos } from 'src/Contrato/contratos/contratos.entity'; 
import { IngresosContratos } from 'src/Ingresoss/ingresoscontratos/ingresoscontratos.entity';

@Entity()
export class Abono {
  
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  monto: number;

/*   @Column()
  @OneToMany(() => Rfcs, (rfc) => rfc.total)
  monto:number */

 /*  @Column()
  fecha: Date; */

  /* @Column()
  idcreacion:number */

  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;

  @ManyToOne(() => Rfcs, (rfcs) => rfcs.Abonos)
  rfc: Rfcs

 /*  @Column()
  rfcId:number */

  @ManyToOne(() => Contratos, (contrato) => contrato.Abonos)
  contrato: Contratos

  @Column()
  contratoId: number

  @ManyToOne(() => Usuarios, (usuario) => usuario.Abonos)
  usuario: Usuarios

  @Column()
  usuarioId:number
  
}
