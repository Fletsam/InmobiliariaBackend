import { Egresos } from 'src/egresos/egresos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConceptosEgresos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clave: string;

  @Column()
  concepto: string;

  @Column()
  parcela: number;

  @Column()
  inversion: number;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;

  @OneToMany(() => Egresos, (egresos) => egresos.concepto)
  Egresos:Egresos[]

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.ConceptosEgresos)
  usuario:Usuarios

  @Column()
  	usuarioId: string;
/* 
  @ManyToOne(() => Usuarios, (usuarios) => usuarios.ConceptosEgresos)
  idmodificacion:Usuarios */
}
