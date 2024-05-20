import { Dias } from "src/gerencia/dias/dias.entity";
import { Gerencia } from "src/gerencia/gerencia.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosGerencia {
  
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	ingreso: number;

	@Column()
	egreso:number

	@Column()
	concepto:string

	@Column()
	folio:string

	@Column()
	formadepago:string

	@Column()
	saldo:number

	@Column()
	receptor:string

	@Column( {default:true})
	estatus:boolean


	@CreateDateColumn({
	name: 'fechadecreacion',
	type: 'datetime',
	default: () => { 'CURRENT_TIMESTAMP'},
	})
	fhcreacion: Date;

	@ManyToOne(() => Gerencia, (gerencia) => gerencia.AbonosGerencia)
	gerencia: Gerencia

	@Column()
	gerenciaId: number

	@ManyToOne(() => Dias, (dias) => dias.AbonosGerencia)
	dia: Dias

	@Column()
	diaId: number

	@ManyToOne(() => Usuarios, (usuario) => usuario.AbonosGerencia)
	usuario: Usuarios

	@Column()
	usuarioId:number
  
}
