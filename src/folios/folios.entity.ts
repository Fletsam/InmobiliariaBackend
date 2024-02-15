import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Folios {
  @PrimaryGeneratedColumn()
  ingresos: number;

  @Column()
  egresos: number;
}
