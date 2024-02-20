import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';

@Entity()
export class EgresosSubConceptosGastos {
  @PrimaryGeneratedColumn()
  id:number

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosGastos)
  egreso: Egresos

   

}
