import { Egresos } from 'src/egresos/egresos.entity';
import { Parcelas } from 'src/parcelas/parcelas.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

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
