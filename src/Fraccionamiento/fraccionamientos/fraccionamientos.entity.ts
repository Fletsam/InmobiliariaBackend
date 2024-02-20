
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lotes } from "../lotes/lotes.entity";
import { Manzanas } from "../manzanas/manzanas.entity";
import { FlujoPorFraccionamiento } from "../flujoporfraccionamiento/flujoporfraccionamiento.entity";

@Entity()

export class Fraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	nombre:string

	@Column()
	totaldelotes:number

	@Column()
	totaldemanzanas:number

	@Column()
	costototal:number

	@OneToMany(() => Lotes, (lotes) => lotes.fraccionamiento) 
  	lote : Lotes[]

	@OneToMany(() => Manzanas, (manzana) => manzana.fraccionamiento) 
  	manzana : Manzanas[]

	@OneToMany(()=>  FlujoPorFraccionamiento ,(flujoporfraccionamiento) => flujoporfraccionamiento.fraccionamientos )
  	FlujoPorFraccionamiento : FlujoPorFraccionamiento[]

}