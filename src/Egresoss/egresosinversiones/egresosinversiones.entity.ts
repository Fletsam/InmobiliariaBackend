
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';

@Entity()
export class EgresosInversiones {
   @PrimaryGeneratedColumn()
    id:number


  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosInversiones)
  egreso: Egresos

 
  

  /* @Column()
  idingreso: number; */

  @Column()
  tipo: string;
}
