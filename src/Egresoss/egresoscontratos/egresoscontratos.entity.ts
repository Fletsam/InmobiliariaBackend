import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class EgresosContratos {
	@PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto: string

	@Column()
	montoegreso:number
	
	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaContrato, (estadocuentacontrato) => estadocuentacontrato.EgresosContratos )
	estadocuentacontrato : EstadoCuentaContrato
	@Column()
	estadocuentacontratoId: number

	@ManyToOne(() => Contratos, (contratos) => contratos.EgresosContratos) 
	contrato : Contratos
	@Column()
	contratoId : number
}