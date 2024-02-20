
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FlujoPorFraccionamiento } from "../flujoporfraccionamiento/flujoporfraccionamiento.entity";

@Entity()

export class FlujoDiarioFraccionamiento {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	dia:number

	@Column()
	monto:number

	@ManyToOne(() => Usuarios, (usuario) => usuario.FlujoDiarioFraccionamiento) 
  	usuario : Usuarios

	 @Column()
  	usuarioId: number;


	@ManyToOne(() => FlujoPorFraccionamiento, (flujoporfraccionamiento) => flujoporfraccionamiento.FlujoDiarioFraccionamiento) 
  	flujoporfraccionamiento : FlujoPorFraccionamiento

	 @Column()
  	flujoporfraccionamientoId: number; 
}