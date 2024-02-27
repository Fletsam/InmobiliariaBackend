
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FlujoPorFraccionamiento } from "../flujoporfraccionamiento/flujoporfraccionamiento.entity";
import { Lotes } from "../lotes/lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";

@Entity()

export class Fraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	nombre:string

	@Column()
	propietario:string

	@Column()
	telefono:string

	@Column()
	direccion:string

	@Column()
	totaldelotes:number

	@Column()
	totaldemanzanas:number

	@Column()
	costototal:number

	@OneToMany(() => Lotes, (lotes) => lotes.fraccionamiento) 
  	Lotes : Lotes[]

	@OneToMany(() => Manzanas, (manzana) => manzana.fraccionamiento) 
  	Manzanas : Manzanas[]



	@OneToMany(() => EgresosFraccionamiento, (egresosfraccionamiento) => egresosfraccionamiento.fraccionamiento) 
  	EgresosFraccionamiento : EgresosFraccionamiento[]


	@OneToMany(()=>  FlujoPorFraccionamiento ,(flujoporfraccionamiento) => flujoporfraccionamiento.fraccionamientos )
  	FlujoPorFraccionamiento : FlujoPorFraccionamiento[]

}