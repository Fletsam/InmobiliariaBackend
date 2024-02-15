import { Egresos } from 'src/egresos/egresos.entity';
import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EgresosSubConceptosProveedor {
  /* @PrimaryGeneratedColumn()
  idegreso: number;
 */
  /* @Column()
  idrfc: number;
 */
  @ManyToOne(() => Rfcs, (rfcs) => rfcs.EgresosSubConceptosProveedor)
  idrfc: Rfcs

  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosProveedor)
  idegreso: Rfcs
}
