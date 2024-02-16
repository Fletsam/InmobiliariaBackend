import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
