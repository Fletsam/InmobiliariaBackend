import { ClienteNoInteres } from 'src/clientesnointeres/clientesnointeres.entity';
import { Contratos } from 'src/contratos/contratos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;

@ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  usuario : Usuarios

  @Column()
  	usuarioId: string;

  /* @ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  idmodificacion : Usuarios */

  @OneToMany(() => ClienteNoInteres, (clientesnointeres) => clientesnointeres.cliente)
  ClienteNoInteres : ClienteNoInteres[];

  @OneToMany(() => Contratos, (contrato) => contrato.clientes)
  Contratos : Contratos[];

}
