import { CarteraClientes } from "../carteraclientes/carteraclientes.entity"; 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Anualidad {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	año:number

	@Column()
	enero:number

	@Column()
	febrero:number

	@Column()
	marzo:number

	@Column()
	abril:number

	@Column()
	mayo:number

	@Column()
	junio:number

	@Column()
	julio:number

	@Column()
	agosto:number

	@Column()
	septiembre:number

	@Column()
	octubre:number

	@Column()
	noviembre:number

	@Column()
	diciembre:number

	@Column()
	sumatotal:number

	@ManyToOne(() => CarteraClientes, (carteraclientes) => carteraclientes.Anualidad) 
  	carteradecliente : CarteraClientes

}