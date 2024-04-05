
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { FlujoPorFraccionamiento } from "../flujoporfraccionamiento/flujoporfraccionamiento.entity";
import { Lotes } from "../lotes/lotes.entity";
import { Manzanas } from "../manzana/manzanas.entity";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";

@Entity()

export class Fraccionamientos {

	@PrimaryGeneratedColumn()
	id:number

	@Column()
	clave:string
	
	@Column()
	nombre:string

	@Column()
	propietario:string

	@Column()
	telefono:string

	@Column()
	direccion:string

	@Column()
	totaldelotes:number

	@Column()
	totaldemanzanas:number

	@Column()
	m2:number

	@Column()
	costototal:number

	@OneToMany(() => Lotes, (lotes) => lotes.fraccionamiento) 
  	Lotes : Lotes[]

	@OneToMany(() => Manzanas, (manzana) => manzana.fraccionamiento) 
  	Manzanas : Manzanas[]

	@ManyToOne( () => Usuarios, (usuario)=> usuario.Fraccionamientos)
	usuario: Usuarios
	
	@Column()
	usuarioId: number
	
/* 	@OneToMany(() => EgresosFraccionamiento, (egresosfraccionamiento) => egresosfraccionamiento.) 
  	EgresosFraccionamiento : EgresosFraccionamiento[] */

	@OneToOne(()=> EstadoCuentaFraccionamiento)
	@JoinColumn()
	EstadoCuentaFraccionamiento : EstadoCuentaFraccionamiento
	

	@OneToMany(()=>  FlujoPorFraccionamiento ,(flujoporfraccionamiento) => flujoporfraccionamiento.fraccionamientos )
  	FlujoPorFraccionamiento : FlujoPorFraccionamiento[]


	@OneToOne(() => ContratosFracc,(contrato)=> contrato.Fraccionamiento )
	contratosFracc: ContratosFracc[]
	@JoinColumn()
	@Column()
	contratoFraccId: number

}