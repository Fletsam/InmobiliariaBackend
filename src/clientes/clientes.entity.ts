import { ClienteNoInteres } from 'src/clientesnointeres/clientesnointeres.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  idcliente: number;

  @Column()
  clave: string;

  @Column()
  nombre: string;

  @Column()
  genero: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  nointeres: number;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  /* @Column()
  idmodificacion: number; */

  @Column()
  fhmodificacion: Date;

@ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  idcreacion : Usuarios

  @ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  idmodificacion : Usuarios

  @OneToMany(() => ClienteNoInteres, (clientesnointeres) => clientesnointeres.idcliente)
  ClienteNoInteres : ClienteNoInteres[];

}
