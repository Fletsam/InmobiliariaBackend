import { IngresosInversiones } from 'src/ingresosinversiones/ingresosinversiones.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Inversionistas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  estatus: number;

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



}
