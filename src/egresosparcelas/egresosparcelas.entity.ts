import { Egresos } from 'src/egresos/egresos.entity';
import { Parcelas } from 'src/parcelas/parcelas.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EgresosParcelas {
 /*  @PrimaryGeneratedColumn()
  idegreso: number;
 */

@ManyToOne(() => Egresos, (egresos) => egresos.EgresosParcelas)
  idegreso: Egresos

@ManyToOne(() => Parcelas, (parcelas) => parcelas.EgresosParcelas)
  idparcela: Parcelas

  /* @Column()
  idparcela: number;
 */
  @Column()
  interes: number;
}
