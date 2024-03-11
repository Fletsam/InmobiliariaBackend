import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from '../area.entity';

@Entity()
export class Funciones {
  
	@PrimaryGeneratedColumn()
	id:number

	@Column(
	{ type: 'longtext', nullable: true })
	tarea: string

	@Column()
	estado:boolean

	@Column()
	fechafin: Date

	@Column()
	fhcreacion:Date

	@ManyToOne(()=> Area ,(area)=> area.Funciones)
	area : Area[]
	@Column()
	areaId:number

	@ManyToOne(()=> Usuarios ,(usuario)=> usuario.Funciones)
	usuario : Usuarios[]
	@Column()
	usuarioId:number



}
