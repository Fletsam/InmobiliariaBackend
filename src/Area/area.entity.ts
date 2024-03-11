import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Funciones } from "./funciones/funciones.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";



@Entity()
export class Area {

	@PrimaryGeneratedColumn()
	id:number

	
	@OneToMany(() => Funciones, (funciones) => funciones.area)
  	Funciones: Funciones[];

	@OneToMany(() => Usuarios, (usuario) => usuario.area)
  	Usuarios: Usuarios[]
	
	@Column()
	nombre:string

	@Column()
	salarioTotal: number

}