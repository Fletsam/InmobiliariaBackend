import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IngresosFraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto: string

	@Column()
	montoingreso: number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaFraccionamiento, (estadocuentafraccionamiento) => estadocuentafraccionamiento.IngresosFraccionamientos) 
	estadocuentafraccionamiento : EstadoCuentaFraccionamiento
	@Column()
	estadocuentafraccionamientoId : number

	@ManyToOne(() => Contratos, (contrato) => contrato.IngresosFraccionamientos) 
	contrato : Contratos
	@Column()
	contratoId : number

}