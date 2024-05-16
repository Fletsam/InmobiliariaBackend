import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Manzanas } from "../manzana/manzanas.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";


@Entity()

export class Lotes {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	numero:string

	@Column()
	clave:string

	@Column({default:true})
	estatus:boolean

	@Column()
	m2:number

	@ManyToOne(() => Manzanas, (manzana) => manzana.Lotes) 
  	manzana : Manzanas

	@Column()
  	manzanaId: number;

	@ManyToOne(() => Fraccionamientos, (fraccionamiento) => fraccionamiento.Manzanas) 
  	fraccionamiento : Fraccionamientos

	@Column()
  	fraccionamientoId: number;

	@ManyToOne(() => Usuarios, (usuario) => usuario.Lotes) 
  	usuario : Usuarios

	@Column()
  	usuarioId: number;

	@OneToOne(() => Contratos,(contrato)=> contrato.Lote )
	Contrato:Contratos
	@JoinColumn()
	@Column()
	contratoId: number
}