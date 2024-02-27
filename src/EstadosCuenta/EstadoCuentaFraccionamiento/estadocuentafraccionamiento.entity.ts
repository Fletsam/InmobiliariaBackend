import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoCuentaFraccionamiento {
	@PrimaryGeneratedColumn()
	id:number

	@OneToOne(() => Fraccionamientos)
	@JoinColumn()
	fraccionamiento: Fraccionamientos
	@Column()
	fraccionamientoId: number;

	@Column()
	montoingreso:number

	@Column()
	montoegreso:number

	@Column()
	cuentasaldo:number

	@OneToMany(() => IngresosFraccionamientos, (ingresosfraccionamientos) => ingresosfraccionamientos.estadocuentafraccionamiento) 
  	IngresosFraccionamientos : IngresosFraccionamientos[]

	@OneToMany(() => EgresosFraccionamiento, (egresosfraccionamiento) => egresosfraccionamiento.estadocuentafraccionamiento) 
  	EgresosFraccionamiento : EgresosFraccionamiento[]	
}