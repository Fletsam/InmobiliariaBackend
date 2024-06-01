import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fase2 {
	@PrimaryGeneratedColumn()
	id:number
	@Column()
	primaria1 : string	
	@Column()
	primaria2 : string
	@Column()
	secundaria1 : string
	@Column()
	secundaria2 : string
	@Column()
	estetica1 : string
	@Column()
	estetica2  : string
	@Column()
	oxxo1 : string
	@Column()
	oxxo2 : string
	@Column()
	gasolinera1 : string
	@Column()
	gasolinera2 : string
	@Column()
	supermercado1 : string
	@Column()
	supermercado2 : string
	@Column()
	miscelanea1 : string
	@Column()
	miscelanea2 : string
	@Column()
	expendio1 : string
	@Column()
	expendio2 : string
	@Column()
	gimnasio1 : string
	@Column()
	gimnasio2 : string
	@Column()
	centrodesalud1 : string
	@Column()
	centrodesalud2 : string
	@Column()
	camionRuta1 : string
	@Column()
	camionRuta2 : string
	@Column()
	farmacia1 : string
	@Column()
	farmacia2 : string
}