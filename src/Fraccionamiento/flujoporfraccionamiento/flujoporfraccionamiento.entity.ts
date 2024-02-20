
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Fraccionamientos } from "../fraccionamientos/fraccionamientos.entity";
import { Ingresos } from "src/Ingresoss/ingresos/ingresos.entity";
import { FlujoDiarioFraccionamiento } from "../flujodiariofraccionamiento/flujodiariofraccionamiento.entity";



@Entity()

export class FlujoPorFraccionamiento {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	flujopordia:number

	@Column()
	flujoporperiodo:number

	@Column()
	flujopormes:number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
 	fhcreacion: Date;

	@ManyToOne(()=> Fraccionamientos, (fraccionamiento) => fraccionamiento.FlujoPorFraccionamiento)
	fraccionamientos: Fraccionamientos
	
	@Column()
	fraccionamientoId : number

	@ManyToOne(()=> Ingresos, (ingreso) => ingreso.FlujoPorFraccionamiento)
	ingreso: Ingresos

	@Column()
	ingresoId: number

	@OneToMany(()=>  FlujoDiarioFraccionamiento ,(flujodiariofraccionamiento) => flujodiariofraccionamiento.flujoporfraccionamiento )
  	FlujoDiarioFraccionamiento : FlujoDiarioFraccionamiento[]

	
}