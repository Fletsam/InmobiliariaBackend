import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosNomina {
  
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nomina: number;

	@Column()
	adeudo:number

	@Column()
	concepto:string

	@Column()
	folio:string

	@Column()
	formadepago:string

	@Column()
	saldo:number

	@CreateDateColumn({
	name: 'fechadecreacion',
	type: 'datetime',
	default: () => { 'CURRENT_TIMESTAMP'},
	})
	fhcreacion: Date;


	@ManyToOne(() => Usuarios, (usuario) => usuario.AbonosVentas)
	usuario: Usuarios

	@Column()
	usuarioId:number
  
}
