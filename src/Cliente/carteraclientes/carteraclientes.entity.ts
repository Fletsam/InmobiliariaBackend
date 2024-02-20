
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anualidad } from "../anualidad/anualidad.entity";



@Entity()

export class CarteraClientes {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	nombre:string

	@Column()
	fraccionamiento : string

	@Column()
	lote:number

	@Column()
	manzana:number

	@Column()
	mensualidad:number

	@Column()
	diadepago:number

	@Column()
	fechadeprimerpago:Date

	@Column()
	fechadeliquidacion:Date

	@Column()
	tasainteres:number

	@Column()
	mesestranscurridos:number

	@Column()
	numeroabono:number

	@Column()
	abono:number

	@Column()
	mesesafinanciar:number

	@Column()
	costo:number

	@Column()
	intereses:number

	@Column()
	enganche:number

	@Column()
	totalanualidad:number

	@Column()
	saldoactual:number

	@Column()
	pagosparairalcorriente:number

	@Column()
	anualidadespendientes:number

	@Column()
	morosos:number

	@Column()
	adeuda:number

	@Column()
	porcentajemorosidad:number

	@Column()
	mesesdeatraso:number


	@OneToMany(() => Anualidad, (anualidad) => anualidad.carteradecliente) 
  	Anualidad : Anualidad[]

}