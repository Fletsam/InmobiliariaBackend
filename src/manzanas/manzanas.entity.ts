import { Fraccionamientos } from "src/fraccionamientos/fraccionamientos.entity";
import { Lotes } from "src/lotes/lotes.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Manzanas {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	m2:number

	@ManyToOne(() => Lotes, (lotes) => lotes.manzana) 
  	lote : Lotes

	 @Column()
  loteId: string;

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.manzana) 
  	fraccionamiento : Fraccionamientos

	 @Column()
  	fraccionamientoId: string;

}