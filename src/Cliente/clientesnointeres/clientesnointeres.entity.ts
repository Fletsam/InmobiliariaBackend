
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Clientes } from '../clientes/clientes.entity';

@Entity()
export class ClienteNoInteres {
 /*  @PrimaryGeneratedColumn()
  idcliente: number; */
  /* @Column()
  idcreacion: number; */
  @PrimaryGeneratedColumn()
    id:number


  @ManyToOne(()=>  Clientes ,(clientes) => clientes.ClienteNoInteres)
  cliente  : Clientes

  @Column()
  clienteId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.ClienteNoInteres)
  usuario  : Usuarios

   @Column()
  usuarioId: string;
}
