import { Egresos } from 'src/egresos/egresos.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

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
