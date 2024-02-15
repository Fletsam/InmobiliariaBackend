import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Pagares } from 'src/pagares/pagares.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class IngresosPagares {
  /* @PrimaryGeneratedColumn()
  idpagare: number; */
  

  /* @Column()
  idingreso: number; */

  @Column()
  monto: number;

  @Column()
  interes: number;

  @Column()
  total: number;

  @ManyToOne(()=>  Ingresos ,(ingresos) => ingresos.IngresosPagares)
  idingreso  : Ingresos

  @ManyToOne(()=>  Pagares ,(pagares) => pagares.IngresosPagares)
  idpagare  : IngresosPagares

}
