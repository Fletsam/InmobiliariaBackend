import { Contratos } from 'src/contratos/contratos.entity';
import { IngresosPagares } from 'src/ingresospagares/ingresospagares.entity';
import { PagaresCancelados } from 'src/pagarescancelados/pagarescancelados.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

Entity();

export class Pagares {
  @PrimaryGeneratedColumn()
  idpagare: number;

  /* @Column()
  idcontrato: number; */

  @Column()
  numero: number;

  @Column()
  fechadepago: Date;

  @Column()
  monto: number;

  @Column()
  pagado: number;

  @Column()
  fpago: Date;

  @Column()
  anualidad: number;

  @Column()
  idmodificacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhmodificacion: Date;

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.Pagares)
  idcreacion  : IngresosPagares

  @ManyToOne(()=>  Contratos ,(contratos) => contratos.Pagares)
  idcontrato  : Contratos


  @OneToMany(()=>  IngresosPagares ,(ingresospagares) => ingresospagares.idpagare)
  IngresosPagares  : IngresosPagares[]

  @OneToMany(()=>  PagaresCancelados ,(pagarescancelados) => pagarescancelados.idpagare)
  PagaresCancelados  : PagaresCancelados[]


}
