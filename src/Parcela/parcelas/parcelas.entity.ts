
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ParcelasProyectos } from '../parcelasproyectos/parcelasproyectos.entity';
import { ParcelasPenalizacion } from '../parcelaspenalizacion/parcelaspenalizacion.entity';
import { EgresosParcelas } from 'src/Egresoss/egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptosParcelas } from 'src/Egresoss/egresossubconceptosparcela/egresossubconceptosparcela.entity';

@Entity()
export class Parcelas {
  @PrimaryGeneratedColumn()
  id: number;

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
  usuario : Usuarios

  @Column()
  usuarioId: string;

  @OneToMany(() => ParcelasProyectos, (parcelasproyectos) => parcelasproyectos.parcela) 
  ParcelasProyectos : ParcelasProyectos[]

  @OneToMany(() => ParcelasPenalizacion, (parcelaspenalizacion) => parcelaspenalizacion.parcela) 
  ParcelasPenalizacion : ParcelasPenalizacion[]

  @OneToMany(() => EgresosParcelas, (egresosparcelas) => egresosparcelas.parcela) 
  EgresosParcelas : EgresosParcelas[]

  @OneToMany(() => EgresosSubConceptosParcelas, (egresossubconceptosparcela) => egresossubconceptosparcela.egreso) 
  EgresosSubConceptosParcelas : EgresosSubConceptosParcelas[]



}
