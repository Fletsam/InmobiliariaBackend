import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PagaresCancelados {
  @PrimaryGeneratedColumn()
  idpagare: number;

  @Column()
  idcancelacion: number;

  @Column()
  fhcancelacion: number;
}
