
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contratos } from '../contratos/contratos.entity';

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
