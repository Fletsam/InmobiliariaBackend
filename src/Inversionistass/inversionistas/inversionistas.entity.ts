
import { Clientes } from 'src/Cliente/clientes/clientes.entity';
import { IngresosInversiones } from 'src/Ingresoss/ingresosinversiones/ingresosinversiones.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Inversionistas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  montototal:number

  @Column()
  montointeres:number

  @Column()
  tasadeinteresmensual:number

  @Column()
  tasadeinteresneta:number

  @Column()
  pagomensual:number
  
  @Column()
  diasdepago: string

  @Column()
  mensualidadesafinanciar:number

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.Inversionistas) 
  usuario : Usuarios

  @Column()
  usuarioId: string;

  @OneToMany(() => IngresosInversiones, (ingresosinversiones) => ingresosinversiones.inversionista) 
  IngresosInversiones : IngresosInversiones[]


  @ManyToOne(() => Clientes, (cliente) => cliente.Inversionistas) 
  clientes : Clientes
  
  @Column()
  	clientesId: string;


}
