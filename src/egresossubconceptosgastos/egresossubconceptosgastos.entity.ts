import { Egresos } from 'src/egresos/egresos.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EgresosSubConceptosGastos {
  /* @PrimaryGeneratedColumn()
  idegreso: number; */

   @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosGastos)
  idegreso: Egresos

}
