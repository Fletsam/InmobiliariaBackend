import { Egresos } from 'src/egresos/egresos.entity';
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

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
