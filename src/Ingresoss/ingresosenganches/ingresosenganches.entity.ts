
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Ingresos } from '../ingresos/ingresos.entity';
import { Contratos } from 'src/Contrato/contratos/contratos.entity';

@Entity()
export class IngresosEnganches {
   @PrimaryGeneratedColumn()
   id:number


  @ManyToOne(() => Ingresos, (ingresos) => ingresos.IngresosEnganches) 
  ingreso : Ingresos

  /* @Column()
  idcontrato: number; */

 

@ManyToOne(() => Contratos, (contratos) => contratos.IngresosEnganches) 
contrato : Ingresos



}
