import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Estados {
  @PrimaryGeneratedColumn()
  idestado: number;

  @Column()
  estado: string;
}
