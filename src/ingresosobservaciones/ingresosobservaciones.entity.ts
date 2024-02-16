import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class IngresosObservaciones {
  @PrimaryGeneratedColumn()
  id: number;




  @Column({ type: 'longtext', nullable: true })
  observaciones: string;

  @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosObservaciones)
  ingresos  : IngresosObservaciones

}
