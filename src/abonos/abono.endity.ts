import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Abono {
  @PrimaryGeneratedColumn()
  idabono: number;

  /* @Column()
  idrfc: number;
 */
  @Column()
  monto: number;

  @Column()
  fecha: Date;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Rfcs, (rfcs) => rfcs.Abonos)
  idrfc: Rfcs

  @ManyToOne(() => Usuarios, (usuario) => usuario.Abonos)
  idcreacion: Usuarios


  
  
  
}
