import { Egresos } from 'src/egresos/egresos.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EgresosSubConceptosProyecto {
  /* @PrimaryGeneratedColumn()
  idegreso: number; */

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosProyecto)
  idegreso: Egresos


/*   @Column()
  idproyecto: number; */

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.EgresosSubConceptosProyecto  )
  idproyecto: Proyectos
  

}
