import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class IdEstados {
  @PrimaryGeneratedColumn()
  idestado: number;

  @Column()
  estado: string;
}
