import { Ingresos } from "src/ingresos/ingresos.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class FlujoMensualDeFraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	mes:number

	@Column()
	monto:number

	@ManyToOne(() => Usuarios, (usuario) => usuario.FlujoMensualDeFraccionamientos) 
  	usuario : Usuarios

	 @Column()
  	usuarioId: string;


	@ManyToOne(() => Ingresos, (ingreso) => ingreso.FlujoMensualDeFraccionamientos) 
  	ingreso : Ingresos

	 @Column()
  ingresoId: string;
}