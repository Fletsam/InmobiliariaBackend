import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class IngresosObservaciones {
  @PrimaryGeneratedColumn()
  idingreso: number;

  @Column({ type: 'longtext', nullable: true })
  observaciones: string;

@ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosObservaciones)
  IngresosObservaciones  : IngresosObservaciones

}
