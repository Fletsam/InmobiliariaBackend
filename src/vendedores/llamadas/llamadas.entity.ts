import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vendedores } from "../vendedores.entity";

@Entity()
export class Llamadas{ 

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	cliente: string

	@Column()
	numero: string

	@Column()
	observaciones: string

	@Column()
	medio:string

	@Column()
	porDondeSeEntero: string

	@CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  		})
  	fhcreacion: Date;

	@ManyToOne(() => Vendedores, (vendedores) => vendedores.Llamadas)
	vendedor: Vendedores

	@Column()
	vendedorId:number

}
