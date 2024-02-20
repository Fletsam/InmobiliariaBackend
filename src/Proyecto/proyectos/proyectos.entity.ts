
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { proyectosproyectos } from '../proyectosproyectos/proyectosproyectos.entity';
import { EgresosSubConceptosProyecto } from 'src/Egresoss/egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { IngresosProyecto } from 'src/Ingresoss/ingresosproyecto/ingresosproyecto.entity';
import { ParcelasProyectos } from 'src/Parcela/parcelasproyectos/parcelasproyectos.entity';

@Entity()
export class Proyectos {
  @PrimaryGeneratedColumn()
  id: number;

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


  @OneToMany(() => proyectosproyectos, (proyectosproyectos) => proyectosproyectos.proyecto) 
  proyectosproyectos : proyectosproyectos[]

  @OneToMany(() => EgresosSubConceptosProyecto, (egresossubconceptosproyecto) => egresossubconceptosproyecto.proyecto) 
   EgresosSubConceptosProyecto : EgresosSubConceptosProyecto[]

  @OneToMany(() => IngresosProyecto, (ingresosproyecto) => ingresosproyecto.proyecto) 
  IngresosProyecto : IngresosProyecto[]

@OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.proyecto) 
  ParcelasProyectos : ParcelasProyectos[]


   @ManyToOne(() => Usuarios, (usuario) => usuario.Proyectos) 
    usuario : Proyectos

    @Column()
  	usuarioId: string;

}
