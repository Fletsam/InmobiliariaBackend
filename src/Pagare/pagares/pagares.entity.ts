
import { Contratos } from 'src/Contrato/contratos/contratos.entity';
import { IngresosPagares } from 'src/Ingresoss/ingresospagares/ingresospagares.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { PagaresCancelados } from '../pagarescancelados/pagarescancelados.entity';




@Entity()
export class Pagares {
  @PrimaryGeneratedColumn()
  id: number;

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
  usuario  : Usuarios

   @Column()
  usuarioId: string;

  @ManyToOne(()=>  Contratos ,(contratos) => contratos.Pagares)
  contrato  : Contratos
 
  @Column()
  contratoId: string;

  @OneToMany(()=>  IngresosPagares ,(ingresospagares) => ingresospagares.pagare)
  IngresosPagares  : IngresosPagares[]

  @OneToMany(()=>  PagaresCancelados ,(pagarescancelados) => pagarescancelados.pagare)
  PagaresCancelados  : PagaresCancelados[]


}
