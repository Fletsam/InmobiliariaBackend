import { Lotes } from "src/lotes/lotes.entity";
import { Manzanas } from "src/manzanas/manzanas.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

	@OneToMany(() => Lotes, (lotes) => lotes.fraccionamiento) 
  	lote : Lotes[]

	@OneToMany(() => Manzanas, (manzana) => manzana.fraccionamiento) 
  	manzana : Manzanas[]

}