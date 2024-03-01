
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FlujoPorFraccionamiento } from "../flujoporfraccionamiento/flujoporfraccionamiento.entity";
import { Lotes } from "../lotes/lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";

@Entity()

export class Fraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	clave:string
	
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

	@ManyToOne( () => Usuarios, (usuario)=> usuario.Fraccionamientos   )
	usuario: Usuarios
	
	@Column()
	usuarioId: number
	
	@OneToMany(() => EgresosFraccionamiento, (egresosfraccionamiento) => egresosfraccionamiento.fraccionamiento) 
  	EgresosFraccionamiento : EgresosFraccionamiento[]


	@OneToMany(()=>  FlujoPorFraccionamiento ,(flujoporfraccionamiento) => flujoporfraccionamiento.fraccionamientos )
  	FlujoPorFraccionamiento : FlujoPorFraccionamiento[]

}