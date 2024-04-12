import { AbonosGerencia } from "src/abonos/abonogerencia/abonogerencia.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gerencia } from "../gerencia.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";

@Entity()

export class Dias {

	@PrimaryGeneratedColumn()
	id:number

	@CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  		})
  	fhcreacion: Date;
	
	@Column()
	montoinicio:number

	@Column()
	ingresototal:number

	@Column()
	egresototal:number

	@Column()
	estatus:boolean

	@OneToMany(() => AbonosGerencia, (abono) => abono.dia)
 	 AbonosGerencia: AbonosGerencia[];

	@ManyToOne(() => Gerencia , (abono) => abono.Dias ) 
	gerencia: Gerencia

	@Column()
	gerenciaId:number

	@ManyToOne(() => Usuarios , (usuario) => usuario.Dias ) 
	usuario: Usuarios

	@Column()
	usuarioId:number
}
