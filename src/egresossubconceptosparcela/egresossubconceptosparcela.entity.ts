import { Egresos } from 'src/egresos/egresos.entity';
import { Parcelas } from 'src/parcelas/parcelas.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EgresosSubConceptosParcelas {
 /*  @PrimaryGeneratedColumn()
  idegreso: number; */

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosParcelas)
  idegreso: Egresos

  @ManyToOne(() => Parcelas, (parcela) => parcela.EgresosSubConceptosParcelas)
  idparcela: Egresos

  /* @Column()
  idparcela: number;
 */

}
