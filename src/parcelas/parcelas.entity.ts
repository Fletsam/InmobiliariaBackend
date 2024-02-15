import { EgresosParcelas } from 'src/egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptosParcelas } from 'src/egresossubconceptosparcela/egresossubconceptosparcela.entity';
import { ParcelasPenalizacion } from 'src/parcelaspenalizacion/parcelaspenalizacion.entity';
import { ParcelasProyectos } from 'src/parcelasproyectos/parcelasproyectos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Parcelas {
  @PrimaryGeneratedColumn()
  idparcela: number;

  @Column()
  parcela: string;

  @Column({ type: 'longtext', nullable: true })
  observaciones: string;

  @Column()
  propietario: string;

  @Column()
  costo: number;

  @Column()
  pagado: number;

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


@ManyToOne(() => Usuarios, (usuario) => usuario.Parcelas) 
  idcreacion : Usuarios

  @OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.idparcela) 
  ParcelasProyectos : ParcelasProyectos[]

  @OneToMany(() => ParcelasPenalizacion, (parcelaspenalizacion) => parcelaspenalizacion.idparcela) 
  ParcelasPenalizacion : ParcelasPenalizacion[]

 @OneToMany(() => EgresosParcelas, (egresosparcelas) => egresosparcelas.idparcela) 
  EgresosParcelas : EgresosParcelas[]

@OneToMany(() => EgresosSubConceptosParcelas, (egresossubconceptosparcela) => egresossubconceptosparcela.idparcela) 
  EgresosSubConceptosParcelas : EgresosSubConceptosParcelas[]



}
