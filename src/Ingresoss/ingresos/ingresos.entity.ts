
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { IngresosProyecto } from '../ingresosproyecto/ingresosproyecto.entity';
import { IngresosEnganches } from '../ingresosenganches/ingresosenganches.entity';
import { IngresosInversiones } from '../ingresosinversiones/ingresosinversiones.entity';
import { IngresosObservaciones } from '../ingresosobservaciones/ingresosobservaciones.entity';
import { IngresosPagares } from '../ingresospagares/ingresospagares.entity';
import { IngresosOtros } from '../ingresosotros/ingresosotros.entity';
import { FlujoPorFraccionamiento } from 'src/Fraccionamiento/flujoporfraccionamiento/flujoporfraccionamiento.entity';
import { ConceptosIngresos } from '../conceptosingresos/conceptosingresos.entity';

@Entity()
export class Ingresos {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(()=>  IngresosProyecto ,(IngresosProyecto) => IngresosProyecto.ingreso )
  IngresosProyecto : IngresosProyecto[]

  @OneToMany(()=>  IngresosEnganches ,(ingresosenganches) => ingresosenganches.ingreso )
  IngresosEnganches : IngresosEnganches[]

  @OneToMany(()=>  IngresosInversiones ,(ingresosinversiones) => ingresosinversiones.ingreso )
  IngresosInversiones : IngresosInversiones[]

  @OneToMany(()=>  IngresosObservaciones ,(ingresosobservaciones) => ingresosobservaciones.ingresos )
  IngresosObservaciones  : IngresosObservaciones[]
  
  @OneToMany(()=>  IngresosPagares ,(ingresospagares) => ingresospagares.ingreso )
  IngresosPagares  : IngresosPagares[]
  
  @OneToMany(()=>  IngresosOtros ,(ingresosotros) => ingresosotros.ingreso )
  IngresosOtros  : IngresosOtros[]
    
   /* @OneToMany(()=>  FlujoMensualDeFraccionamientos ,(flujomensualdefraccionamientos) => flujomensualdefraccionamientos.ingreso )
  FlujoMensualDeFraccionamientos : FlujoMensualDeFraccionamientos[] */

  @OneToMany(()=>  FlujoPorFraccionamiento ,(flujoporfraccionamiento) => flujoporfraccionamiento.ingreso )
  FlujoPorFraccionamiento : FlujoPorFraccionamiento[]

  @ManyToOne(()=>  ConceptosIngresos ,(conceptosingresos) => conceptosingresos.Ingresos )
  concepto  : ConceptosIngresos

  @Column()
  conceptoId: string;

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.Ingresos)
  usuario  : Usuarios

  @Column()
  usuarioId: string;

}
