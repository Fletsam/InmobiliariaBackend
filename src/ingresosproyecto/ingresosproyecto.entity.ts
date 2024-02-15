import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class IngresosProyecto {
/*   @PrimaryGeneratedColumn()
  idingreso: number; */

  /* @Column()
  idproyecto: number; */

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.IngresosProyecto) 
  idproyecto : Proyectos

  @ManyToOne(() => Ingresos, (ingresos) => ingresos.IngresosProyecto) 
  idingreso : Ingresos

}
