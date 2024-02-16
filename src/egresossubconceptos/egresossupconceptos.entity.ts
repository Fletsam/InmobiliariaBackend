import { Egresos } from 'src/egresos/egresos.entity';
import { Entity, ManyToOne ,PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EgresosSubConceptos {
   @PrimaryGeneratedColumn()
  id:number


  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptos)
  egreso: Egresos


  @Column({ type: 'longtext', nullable: true })
  observaciones: string;
}
