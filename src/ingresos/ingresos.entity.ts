import { ConceptosIngresos } from 'src/conceptosingresos/conceptosingresos.entity';
import { IngresosEnganches } from 'src/ingresosenganches/ingresosenganches.entity';
import { IngresosInversiones } from 'src/ingresosinversiones/ingresosinversiones.entity';
import { IngresosObservaciones } from 'src/ingresosobservaciones/ingresosobservaciones.entity';
import { IngresosOtros } from 'src/ingresosotros/ingresosotros.entity';
import { IngresosPagares } from 'src/ingresospagares/ingresospagares.entity';
import { IngresosProyecto } from 'src/ingresosproyecto/ingresosproyecto.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Ingresos {
  @PrimaryGeneratedColumn()
  idingreso: number;

  /* @Column()
  idconcepto: number; */

  @Column()
  folio: string;

  @Column()
  fecha: Date;

  @Column()
  monto: number;

  @Column()
  estatus: number;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @Column()
  idmodificacion: number;

  @Column()
  fhmodificacion: Date;



  @OneToMany(()=>  IngresosProyecto ,(IngresosProyecto) => IngresosProyecto.idingreso )
  IngresosProyecto : IngresosProyecto[]

  @OneToMany(()=>  IngresosEnganches ,(ingresosenganches) => ingresosenganches.idingreso )
  IngresosEnganches : IngresosEnganches[]

  @OneToMany(()=>  IngresosInversiones ,(ingresosinversiones) => ingresosinversiones.idingreso )
   IngresosInversiones : IngresosInversiones[]

  @OneToMany(()=>  IngresosObservaciones ,(ingresosobservaciones) => ingresosobservaciones.idingreso )
  IngresosObservaciones  : IngresosObservaciones[]
  
  @OneToMany(()=>  IngresosPagares ,(ingresospagares) => ingresospagares.idingreso )
  IngresosPagares  : IngresosPagares[]
  
  @OneToMany(()=>  IngresosOtros ,(ingresosotros) => ingresosotros.idingreso )
  IngresosOtros  : IngresosOtros[]
    
  @ManyToOne(()=>  ConceptosIngresos ,(conceptosingresos) => conceptosingresos.Ingresos )
  idconcepto  : ConceptosIngresos

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.Ingresos)
  idcreacion  : Usuarios

}
