
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ingresos } from '../ingresos/ingresos.entity';
import { Proyectos } from 'src/Proyecto/proyectos/proyectos.entity';

@Entity()
export class IngresosProyecto {
 @PrimaryGeneratedColumn()
 id:number

@ManyToOne(() => Ingresos, (ingresos) => ingresos.IngresosProyecto) 
ingreso : Ingresos

  /* @Column()
  idproyecto: number; */

@ManyToOne(() => Proyectos, (proyecto) => proyecto.IngresosProyecto) 
proyecto : Proyectos

  

}
