import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class EgresosFraccionamiento {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto:string

	@Column()
	montoegreso:number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaFraccionamiento, (estadocuentafraccionamiento) => estadocuentafraccionamiento.EgresosFraccionamiento )
	estadocuentafraccionamiento : EstadoCuentaFraccionamiento
	@Column()
	estadocuentafraccionamientoId: number

/* 	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.EgresosFraccionamiento) 
	fraccionamiento : Fraccionamientos
	@Column()
	fraccionamientoId : number */
	
	@ManyToOne(() => ContratosFracc, (contrato) => contrato.EgresosFraccionamiento) 
	contratosFracc : ContratosFracc
	@Column()
	contratosFraccId : number
}