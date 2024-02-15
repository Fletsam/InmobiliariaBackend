import { Egresos } from 'src/egresos/egresos.entity';
import { Entity, ManyToOne ,PrimaryGeneratedColumn, Column } from 'typeorm';

Entity();

export class EgresosSubConceptos {
  /* @PrimaryGeneratedColumn()
  idegreso: number; */
 
  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptos)
  idegreso: Egresos



  @Column()
  idsubconcepto: number;

  @Column({ type: 'longtext', nullable: true })
  observaciones: string;
}
