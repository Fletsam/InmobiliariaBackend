import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InversionesRendimientos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  posicion: number;

  @Column()
  fecha: Date;

  @Column()
  rendimiento: number;

  @Column()
  capital: number;

  @Column()
  pago: number;

  @Column()
  saldo: number;

  @Column()
  pagado: number;

  @Column()
  fpago: Date;
}
