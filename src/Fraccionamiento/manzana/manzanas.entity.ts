import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";

import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lotes } from "../lotes/lotes.entity";


@Entity()

export class Manzanas {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	numero:string

	@Column()
	clave:string
	
	@Column()
	costototal:number

	@OneToMany(() => Lotes, (lote) => lote.manzana) 
  	Lotes : Lotes[]

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.Lotes) 
  	fraccionamiento : Fraccionamientos

	@Column()
  	fraccionamientoId: number;

	@ManyToOne(() => Usuarios, (usuario) => usuario.Manzanas) 
  	usuario : Usuarios

	@Column()
  	usuarioId: number;
}