
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingresos } from '../ingresos/ingresos.entity';

@Entity()
export class IngresosOtros {
 @PrimaryGeneratedColumn()
  id:number


 @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosOtros)
  ingreso  : IngresosOtros
}
