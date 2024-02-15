import { Contratos } from 'src/contratos/contratos.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ContratosMoratorio {
  /* @PrimaryGeneratedColumn()
  idcontrato: number; */

  @Column()
  dias: number;

  @Column()
  interes: number;

  @ManyToOne(() => Contratos, (contratos) => contratos.ContratosMoratorio) 
  idcontrato : ContratosMoratorio
}
