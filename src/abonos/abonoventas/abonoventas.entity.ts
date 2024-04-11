import { Usuarios } from "src/usuarios/usuarios.entity";
import { Vendedores } from "src/vendedores/vendedores.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonosVentas {
  
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	abono: number;

	@Column()
	comision:number

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

	@ManyToOne(() => Vendedores, (vendedores) => vendedores.AbonosVentas)
	vendedor: Vendedores

	@Column()
	vendedorId: number

	@ManyToOne(() => Usuarios, (usuario) => usuario.AbonosVentas)
	usuario: Usuarios

	@Column()
	usuarioId:number
  
}
