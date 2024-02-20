
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contratos } from '../contratos/contratos.entity';

@Entity()
export class ContratosMoratorio {
  @PrimaryGeneratedColumn()
  id:number
  @ManyToOne(() => Contratos, (contratos) => contratos.ContratosMoratorio) 
  contrato : ContratosMoratorio

  @Column()
  dias: number;

  @Column()
  interes: number;

  
}
