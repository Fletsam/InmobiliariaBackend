import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { Abono } from "src/abonos/abono.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class IngresosContratos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto: string

	@Column()
	montoingreso: number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaContrato, (estadocuentacontrato) => estadocuentacontrato.IngresosContratos) 
	estadocuentacontrato : EstadoCuentaContrato
	
	@Column()
	estadocuentacontratoId : number

	@ManyToOne(() => Contratos, (contratos) => contratos.IngresosContratos) 
	contrato : Contratos

	@Column()
	contratoId : number
}