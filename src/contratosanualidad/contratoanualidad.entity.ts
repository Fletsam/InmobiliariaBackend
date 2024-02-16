import { Contratos } from 'src/contratos/contratos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ContratoAnualidad {
  @PrimaryGeneratedColumn()
  id:number


  @ManyToOne(() => Contratos, (contratos) => contratos.ContratoAnualidad) 
  contrato : Contratos

  @Column()
  anualidad: number;

  @Column()
  mes: number;



}
