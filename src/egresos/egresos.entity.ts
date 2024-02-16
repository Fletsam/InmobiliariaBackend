import { ConceptosEgresos } from 'src/conceptosegresos/conceptosegresos.entity';
import { EgresosInversiones } from 'src/egresosinversiones/egresosinversiones.entity';
import { EgresosParcelas } from 'src/egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptos } from 'src/egresossubconceptos/egresossupconceptos.entity';
import { EgresosSubConceptosGastos } from 'src/egresossubconceptosgastos/egresossubconceptosgastos.entity';
import { EgresosSubConceptosParcelas } from 'src/egresossubconceptosparcela/egresossubconceptosparcela.entity';
import { EgresosSubConceptosProveedor } from 'src/egresossubconceptosproveedor/egresossubconceptosproveedor';
import { EgresosSubConceptosProyecto } from 'src/egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Egresos {
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

  @OneToMany(() => EgresosSubConceptosProveedor, (egresossubconceptosproveedor) => egresossubconceptosproveedor.egreso) 
  EgresosSubConceptosProveedor : EgresosSubConceptosProveedor[]

  @OneToMany(() => EgresosInversiones, (egresosinversiones) => egresosinversiones.egreso)
  EgresosInversiones:EgresosInversiones[]
  
  @OneToMany(() => EgresosParcelas, (egresosparcelas) => egresosparcelas.egreso)
  EgresosParcelas:EgresosParcelas[]

  @OneToMany(() => EgresosSubConceptosParcelas, (egresossubconceptosparcela) => egresossubconceptosparcela.egreso)
  EgresosSubConceptosParcelas:EgresosSubConceptosParcelas[]
  
  @OneToMany(() => EgresosSubConceptos, (egresossubconceptos) => egresossubconceptos.egreso)
  EgresosSubConceptos:EgresosSubConceptos[]

  @OneToMany(() => EgresosSubConceptos, (egresossubconceptos) => egresossubconceptos.egreso)
  EgresosSubConceptosGastos:EgresosSubConceptosGastos[]

  @OneToMany(() => EgresosSubConceptosProyecto, (egresossubconceptosproyecto) => egresossubconceptosproyecto.egreso)
  EgresosSubConceptosProyecto :EgresosSubConceptosProyecto[]

  @ManyToOne(() => ConceptosEgresos, (conceptosegresos) => conceptosegresos.Egresos)
  concepto: ConceptosEgresos

   @Column()
  conceptoId: string;
  
  @ManyToOne(() => Usuarios, (usuario) => usuario.Egresos)
  usuario: Usuarios

   @Column()
  usuarioId: string;

  /* @ManyToOne(() => Usuarios, (usuario) => usuario.Egresos)
  idmodificacion: Usuarios */

}
