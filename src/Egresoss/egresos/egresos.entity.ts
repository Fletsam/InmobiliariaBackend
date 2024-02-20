
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { EgresosSubConceptosProveedor } from '../egresossubconceptosproveedor/egresossubconceptosproveedor';
import { EgresosInversiones } from '../egresosinversiones/egresosinversiones.entity';
import { EgresosParcelas } from '../egresosparcelas/egresosparcelas.entity';
import { EgresosSubConceptosParcelas } from '../egresossubconceptosparcela/egresossubconceptosparcela.entity';
import { EgresosSubConceptos } from '../egresossubconceptos/egresossupconceptos.entity';
import { EgresosSubConceptosGastos } from '../egresossubconceptosgastos/egresossubconceptosgastos.entity';
import { EgresosSubConceptosProyecto } from '../egresossubconceptosproyecto/egresossubconceptosproyecto.entity';
import { ConceptosEgresos } from '../conceptosegresos/conceptosegresos.entity';

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

  @OneToMany(() => EgresosSubConceptosGastos, (egresossubconceptosgastos) => egresossubconceptosgastos.egreso)
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
