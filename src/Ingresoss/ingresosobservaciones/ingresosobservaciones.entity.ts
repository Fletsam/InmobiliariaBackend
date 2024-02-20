
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ingresos } from '../ingresos/ingresos.entity';

@Entity()
export class IngresosObservaciones {
  @PrimaryGeneratedColumn()
  id: number;




  @Column({ type: 'longtext', nullable: true })
  observaciones: string;

  @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosObservaciones)
  ingresos  : IngresosObservaciones

}
