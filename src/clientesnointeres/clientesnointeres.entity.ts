import { Clientes } from 'src/clientes/clientes.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ClienteNoInteres {
 /*  @PrimaryGeneratedColumn()
  idcliente: number; */

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

@ManyToOne(()=>  Clientes ,(clientes) => clientes.ClienteNoInteres)
  idcliente  : Clientes


  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.ClienteNoInteres)
  idcreacion  : Usuarios
}
