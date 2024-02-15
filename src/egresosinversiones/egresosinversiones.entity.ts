import { Egresos } from 'src/egresos/egresos.entity';
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EgresosInversiones {
  /* @PrimaryGeneratedColumn()
  idegreso: number;
 */

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosInversiones)
  idegreso: Egresos
  

  @Column()
  idingreso: number;

  @Column()
  tipo: string;
}
