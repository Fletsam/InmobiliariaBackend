import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngresosOtros {
 @PrimaryGeneratedColumn()
  id:number


 @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosOtros)
  ingreso  : IngresosOtros
}
