import { AbonosGerencia } from 'src/abonos/abonogerencia/abonogerencia.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dias } from './dias/dias.entity';

@Entity()
export class Gerencia {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	nombre: string

	@Column()
	ingresototal:number

	@Column()
	egresototal:number

	@OneToMany(() => AbonosGerencia, (abono) => abono.gerencia)
 	 AbonosGerencia: AbonosGerencia[];

	@OneToMany(() => Dias, (dias) => dias.gerencia)
 	 Dias: Dias[];

}
