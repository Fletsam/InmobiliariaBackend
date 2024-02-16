import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



interface Clase {
	clase : "exclusiva" | "conveniencia"

}

@Entity()
export class Casas {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	nombre:string

	@Column()
	costo:number
	
	@Column()
	cuartos:number

	@Column()
	baños:number

	@Column()
	cochera:number

	@Column()
	direccion:string

	@Column()
	estado:string

	@Column()
	m2:string

	@Column()
	fichaimagen:string

	@Column()
	clase: Clase

}