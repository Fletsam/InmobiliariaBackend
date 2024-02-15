import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class proyectosproyectos {
  @PrimaryGeneratedColumn()
  idproyectoc: number;

  /* @Column()
  idproyecto: number; */

  @Column()
  idcreacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.proyectosproyectos) 
  idproyecto : Proyectos


}
