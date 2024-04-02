import { Contratos } from 'src/Contrato/contratos/contratos.entity';
import { ContratosProveedores } from 'src/Contrato/contratosProveedores/contratosproveedores.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proveedores {
  
	@PrimaryGeneratedColumn()
  	id:number

	@Column()
	nombre:string

	@Column()
	telefono:string

	@Column()
	direccion:string

	@Column()
	rfc:string

	@Column()
	correo:string

	@ManyToOne(() => Usuarios, (usuario) => usuario.Proveedores) 
	usuario : Usuarios

	@Column()
	usuarioId: number;

	@OneToMany(() => ContratosProveedores, (contratosProveedores) => contratosProveedores.proveedor)
  	ContratosProveedores : ContratosProveedores[];




}
