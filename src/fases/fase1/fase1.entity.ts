/* import { Propiedades } from "src/propiedades/propiedades.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fase1 {
	@PrimaryGeneratedColumn()
	id:number

	@Column()
	comsionTotal: number
	
	@Column()
	comsionthi: number
	
	@Column()
	comsionIngresador: number
	
	@Column()
	comsionCerrador: number

	@Column()
	escritura: boolean

	@Column()
	ideCliente: boolean

	@Column()
	predial: boolean

	@Column()
	aguaydrenaje: boolean
	
	@Column()
	serviciosLuz: boolean
	
	@Column()
	fotografias: boolean

	@Column()
	contratoExclusivad: boolean

	@Column()
	avaluo : boolean

	@Column()
	planoArquitectonico : boolean 

	@OneToOne(() => Propiedades,(propiedades)=> propiedades.fase1Id )
	@JoinColumn()
	propiedad:Propiedades
	@Column()
	propiedadId: number
} */