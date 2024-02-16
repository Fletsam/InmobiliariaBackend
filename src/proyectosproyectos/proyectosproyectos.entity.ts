import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class proyectosproyectos {
  @PrimaryGeneratedColumn()
  id: number;

  /* @Column()
  idproyecto: number; */

  @Column()
  idcreacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.proyectosproyectos) 
  proyecto : Proyectos

  @Column()
  proyectoId: string;

   @ManyToOne(() => Usuarios, (usuario) => usuario.proyectosproyectos) 
  usuario : Usuarios

  @Column()
  usuarioId: string;
}
