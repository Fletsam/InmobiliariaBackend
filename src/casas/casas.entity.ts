import { Usuarios } from "src/usuarios/usuarios.entity";
import { Vendedores } from "src/vendedores/vendedores.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



interface Clase {
	clase : "exclusiva" | "conveniencia"

}

@Entity()
export class csacsacsa {

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
	tipo: Clase

	@ManyToOne(() => Vendedores, (vendedor) => vendedor.usuario)
	usuario: Usuarios

}