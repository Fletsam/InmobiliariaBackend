import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Pagares } from 'src/pagares/pagares.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class IngresosPagares {
   @PrimaryGeneratedColumn()
  id:number


  @ManyToOne(()=>  Pagares ,(pagares) => pagares.IngresosPagares)
  pagare: Pagares
  

  /* @Column()
  idingreso: number; */

  @Column()
  monto: number;

  @Column()
  interes: number;

  @Column()
  total: number;

  @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosPagares)
  ingreso: Ingresos

  

}
