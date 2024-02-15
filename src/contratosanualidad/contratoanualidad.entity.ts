import { Contratos } from 'src/contratos/contratos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ContratoAnualidad {
  /* @PrimaryGeneratedColumn()
  idcontrato: number; */

  @Column()
  anualidad: number;

  @Column()
  mes: number;

@ManyToOne(() => Contratos, (contratos) => contratos.ContratoAnualidad) 
  idcontrato : Contratos

}
