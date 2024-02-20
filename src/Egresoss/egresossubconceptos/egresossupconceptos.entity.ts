import { Entity, ManyToOne ,PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';

@Entity()
export class EgresosSubConceptos {
   @PrimaryGeneratedColumn()
  id:number


  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptos)
  egreso: Egresos


  @Column({ type: 'longtext', nullable: true })
  observaciones: string;
}
