import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, CreateDateColumn, PrimaryGeneratedColumn, Column,ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Abono {
  @PrimaryGeneratedColumn()
  id: number;

  /* @Column()
  idrfc: number; */

  @Column()
  monto: number;

  @Column()
  fecha: Date;

 /*  @Column()
  idcreacion: number; */

  



  @CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;

  @ManyToOne(() => Rfcs, (rfcs) => rfcs.Abonos)
  rfc: Rfcs

  @Column()
  rfcId:number


  @ManyToOne(() => Usuarios, (usuario) => usuario.Abonos)
  usuario: Usuarios

    @Column()
  usuarioId:number

  
  
  
}
