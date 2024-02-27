import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Manzanas } from "../manzana/manzanas.entity";


@Entity()

export class Lotes {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	clave:string

	@Column()
	m2:number

	@Column()
	costo:number

	@ManyToOne(() => Manzanas, (manzana) => manzana.Lotes) 
  	manzana : Manzanas

	@Column()
  	manzanaId: number;

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.Manzanas) 
  	fraccionamiento : Fraccionamientos

	@Column()
  	fraccionamientoId: number;

}