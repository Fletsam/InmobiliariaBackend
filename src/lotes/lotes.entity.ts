import { Fraccionamientos } from "src/fraccionamientos/fraccionamientos.entity";
import { Manzanas } from "src/manzanas/manzanas.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Lotes {

	@PrimaryGeneratedColumn()
	id:number

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