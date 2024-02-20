import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class subconceptoegresos {
  @PrimaryGeneratedColumn()
  idsubconcepto: number;

  @Column()
  idconcepto: number;

  @Column()
  clave: string;

  @Column()
  concepto: string;

  @Column()
  idcreacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;
}
