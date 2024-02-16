import { Egresos } from 'src/egresos/egresos.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EgresosSubConceptosGastos {
  @PrimaryGeneratedColumn()
  id:number

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosGastos)
  egreso: Egresos

   

}
