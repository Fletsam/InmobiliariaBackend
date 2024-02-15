import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cajas {
  @PrimaryGeneratedColumn()
  idcaja: number;

  @Column()
  caja: number;

  @Column()
  cjenc: string;

  @Column()
  impresorac: string;

  @Column()
  impresorat: string;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

 /*  @Column()
  idmodificacion: number; */

  @Column()
  fhmodificacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.Cajas) 
  idcreacion : Usuarios

  @ManyToOne(() => Usuarios, (usuario) => usuario.Cajas) 
  idmodificacion : Usuarios

}
