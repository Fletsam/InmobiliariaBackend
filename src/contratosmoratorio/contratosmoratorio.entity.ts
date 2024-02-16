import { Contratos } from 'src/contratos/contratos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
