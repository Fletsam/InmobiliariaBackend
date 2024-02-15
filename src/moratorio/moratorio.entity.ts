import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Moratorio {
  @PrimaryGeneratedColumn()
  dias: number;

  @Column()
  interes: number;

  @Column()
  idcreacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;
}
