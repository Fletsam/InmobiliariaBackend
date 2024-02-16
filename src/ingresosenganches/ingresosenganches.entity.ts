import { Contratos } from 'src/contratos/contratos.entity';
import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

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
