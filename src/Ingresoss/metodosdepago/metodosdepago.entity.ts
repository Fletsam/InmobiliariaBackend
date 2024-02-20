import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MetodosDePago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  metodo: string;

  @Column()
  efectivo: number;

  @Column()
  estatus: number;

  @Column()
  idcreacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;

  @Column()
  field8: number;
}
