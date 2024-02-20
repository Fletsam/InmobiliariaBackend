
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';
import { Proyectos } from 'src/Proyecto/proyectos/proyectos.entity';

@Entity()
export class EgresosSubConceptosProyecto {
  @PrimaryGeneratedColumn()
  id:number

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosProyecto)
  egreso: Egresos


/*   @Column()
  idproyecto: number; */

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.EgresosSubConceptosProyecto  )
  proyecto: Proyectos
  

}
