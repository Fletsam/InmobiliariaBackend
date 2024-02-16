import { ConceptosIngresos } from 'src/conceptosingresos/conceptosingresos.entity';
import { FlujoMensualDeFraccionamientos } from 'src/flujomensualdefraccionamientos/flujomensualdefraccionamientos.entity';
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
    
   @OneToMany(()=>  FlujoMensualDeFraccionamientos ,(flujomensualdefraccionamientos) => flujomensualdefraccionamientos.ingreso )
  FlujoMensualDeFraccionamientos : FlujoMensualDeFraccionamientos[]


  @ManyToOne(()=>  ConceptosIngresos ,(conceptosingresos) => conceptosingresos.Ingresos )
  concepto  : ConceptosIngresos

   @Column()
  conceptoId: string;

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.Ingresos)
  usuario  : Usuarios

   @Column()
  usuarioId: string;

}
