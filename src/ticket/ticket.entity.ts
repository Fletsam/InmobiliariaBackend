import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  superios: string;

  @Column()
  inferior: string;

  @Column()
  imagen: any;

  @Column()
  copias: number;

  @Column()
  impresora: string;
}
