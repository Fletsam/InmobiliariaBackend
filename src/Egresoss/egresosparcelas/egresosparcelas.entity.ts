
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';
import { Parcelas } from 'src/Parcela/parcelas/parcelas.entity';

@Entity()
export class EgresosParcelas {
 @PrimaryGeneratedColumn()
  id:number

 @ManyToOne(() => Egresos, (egresos) => egresos.EgresosParcelas)
  egreso: Egresos

   @Column()
  egresoId: string;



@ManyToOne(() => Parcelas, (parcelas) => parcelas.EgresosParcelas)
  parcela: Parcelas

   @Column()
  parcelaId: string;
  /* @Column()
  idparcela: number;
 */
  @Column()
  interes: number;
}
