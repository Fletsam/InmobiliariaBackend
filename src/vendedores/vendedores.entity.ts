import { AbonosVentas } from "src/abonos/abonoventas/abonoventas.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendedores {
	@PrimaryGeneratedColumn()
	id:number
	
	@Column()
	user:string

	@Column()
	pass:string

	@Column({default:true})
	estatus: boolean;

	@Column()
	nombre: string;

	@Column()
	telefono: string;

	@Column()
	genero:string

	@Column()
	curp: string;

	@Column()
	rfc: string;

	@Column()
	colonia: string;

	@Column()
	calle: string;

	@Column()
	numero: string;

	@Column()
	cp: string;

	@Column()
	correo: string;

	@Column()
	estadocivil: string;

	@Column()
	comisiones: number

	@Column()
	pagado:number

	

	@CreateDateColumn({
    name: 'fechadecreacion',
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  		})
  	fhcreacion: Date;

	@OneToMany(() => AbonosVentas, (abono) => abono.vendedor)
 	 AbonosVentas: AbonosVentas[];

	@ManyToOne(() => Usuarios, (usuario) => usuario.Vendedores)
	usuario: Usuarios

	@Column()
	usuarioId:number

	}
	 