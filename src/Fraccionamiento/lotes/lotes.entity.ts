import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";

import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Manzanas } from "../manzanas/manzanas.entity";

@Entity()

export class Lotes {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	costototal:number

	@OneToMany(() => Manzanas, (manzana) => manzana.lote) 
  	manzana : Manzanas[]

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.lote) 
  	fraccionamiento : Fraccionamientos

	@Column()
  	fraccionamientoId: string;

	@ManyToOne(() => Usuarios, (usuario) => usuario.Lotes) 
  	usuario : Usuarios

	@Column()
  	usuarioId: string;
}