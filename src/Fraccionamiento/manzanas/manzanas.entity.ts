import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lotes } from "../lotes/lotes.entity";


@Entity()

export class Manzanas {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	m2:string

	@Column()
	costo:number

	@ManyToOne(() => Lotes, (lotes) => lotes.manzana) 
  	lote : Lotes

	@Column()
  	loteId: string;

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.manzana) 
  	fraccionamiento : Fraccionamientos

	@Column()
  	fraccionamientoId: string;

}