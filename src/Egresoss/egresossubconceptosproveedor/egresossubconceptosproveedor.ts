
import { Rfcs } from 'src/rfcs/rfcs.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';

@Entity()
export class EgresosSubConceptosProveedor {
   @PrimaryGeneratedColumn()
    id:number


  @ManyToOne(() => Egresos, (egresos) => egresos.EgresosSubConceptosProveedor)
  egreso: Egresos
  /* @Column()
  idrfc: number;
 */
  @ManyToOne(() => Rfcs, (rfcs) => rfcs.EgresosSubConceptosProveedor)
  rfc: Rfcs

 
}
