import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class ConceptosIngresos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clave: string;

  @Column()
  concepto: string;

  @Column()
  enganche: number;

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

  @OneToMany(()=>  Ingresos ,(ingresos) => ingresos.concepto )
  Ingresos  : Ingresos[]

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.ConceptoIngresos )
  usuario  : Usuarios

  @Column()
  	usuarioId: string;
  
}
