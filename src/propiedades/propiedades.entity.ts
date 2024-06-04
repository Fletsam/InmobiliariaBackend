/* import { Clientes } from "src/Cliente/clientes/clientes.entity";
import { Fase1 } from "src/fases/fase1/fase1.entity";
import { Llamadas } from "src/vendedores/llamadas/llamadas.entity";
import { Vendedores } from "src/vendedores/vendedores.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



export interface Clase {
	clase : "exclusiva" | "conveniencia"

}

export interface Tipo {
	tipo : "Casa" | "Terreno" | "Edificio" | "Bodega"

}


@Entity()
export class Propiedades {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	propiedad:string
	
	@Column()
	cuartos:number

	@Column()
	baños:number

	@Column()
	cocheras:number

	@Column()
	direccion:string

	@Column()
	estado:boolean

	@Column()
	vendido:boolean

	@Column()
	m2Construido:string

	@Column()
	m2Terreno:string

	@Column()
	creditos: string

	@Column()
	costo:number
	
	@Column()
	comision: number
	
	@Column()
	descripcion : string

	@Column()
	tipo: string

	@Column()
	clase: Clase

	@Column()
	fase: number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion: Date;

	@ManyToOne(() => Vendedores, (vendedor) => vendedor.Propiedades)
	vendedor: Vendedores 
	
	@Column()
	vendedorId: number

	@OneToMany(() => Llamadas, (llamadas) => llamadas.vendedor)
 	Llamadas: Llamadas[];

	@ManyToOne(() => Clientes , (cliente) => cliente.Propiedades)
	clientes : Clientes

	@Column()
	clientesId : number

	@OneToOne(() => Fase1,(fase1)=> fase1.propiedadId )
	@JoinColumn()
	fase1:Fase1
	@Column()
	fase1Id: number
}

 */