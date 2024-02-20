
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';
import { Parcelas } from 'src/Parcela/parcelas/parcelas.entity';

@Entity()
export class EgresosSubConceptosParcelas {
 @PrimaryGeneratedColumn()
    id:number

 @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosParcelas)
  egreso: Egresos

   @Column()
  egresoId: string;

  @ManyToOne(() => Parcelas, (parcela) => parcela.EgresosSubConceptosParcelas)
  parcela: Egresos

   @Column()
  parcelaId: string;
  /* @Column()
  idparcela: number;
 */

}
