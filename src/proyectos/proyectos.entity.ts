import { EgresosSubConceptosProyecto } from 'src/egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { IngresosProyecto } from 'src/ingresosproyecto/ingresosproyecto.entity';
import { ParcelasProyectos } from 'src/parcelasproyectos/parcelasproyectos.entity';
import { proyectosproyectos } from 'src/proyectosproyectos/proyectosproyectos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Proyectos {
  @PrimaryGeneratedColumn()
  idproyecto: number;

  @Column()
  proyecto: string;

  @Column()
  clausulab: string;

  @Column()
  desarrollo: number;

  @Column()
  tipo: number;

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


  @OneToMany(() => proyectosproyectos, (proyectosproyectos) => proyectosproyectos.idproyecto) 
  proyectosproyectos : proyectosproyectos[]

  @OneToMany(() => EgresosSubConceptosProyecto, (egresossubconceptosproyecto) => egresossubconceptosproyecto.idproyecto) 
   EgresosSubConceptosProyecto : EgresosSubConceptosProyecto[]

  @OneToMany(() => IngresosProyecto, (ingresosproyecto) => ingresosproyecto.idproyecto) 
  IngresosProyecto : IngresosProyecto[]

@OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.idproyecto) 
  ParcelasProyectos : ParcelasProyectos[]


   @ManyToOne(() => Usuarios, (usuario) => usuario.Proyectos) 
  idcreacion : Proyectos


}
