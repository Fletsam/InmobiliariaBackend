import { Contratos } from 'src/contratos/contratos.entity';
import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class IngresosEnganches {
  /* @PrimaryGeneratedColumn()
  idingreso: number; */

  /* @Column()
  idcontrato: number; */

 @ManyToOne(() => Ingresos, (ingresos) => ingresos.IngresosEnganches) 
  idingreso : Ingresos

@ManyToOne(() => Contratos, (contratos) => contratos.IngresosEnganches) 
idcontrato : Ingresos



}
