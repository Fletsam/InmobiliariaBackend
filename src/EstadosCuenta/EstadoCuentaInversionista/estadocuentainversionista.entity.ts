import { ContratosInversionista } from "src/Contrato/contratosInversionista/contratoinversionista.entity";
import { EgresosInversionista } from "src/Egresoss/egresosinversiones/egresosinversiones.entity";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoCuentaInversionista {

	@PrimaryGeneratedColumn()
	id:number

	@OneToOne(() => ContratosInversionista)
	@JoinColumn()
	contratoInversionista: ContratosInversionista
	@Column()
	contratoInversionistaId: number;

	@Column({default:"Total"})
	concepto:string

	@Column()
	montoingreso:number

	@Column()
	montoegreso:number

	@Column()
	cuentasaldo:number

	@OneToMany(() => IngresosInversionista, (ingresosinversionista) => ingresosinversionista.EstadoCuentaInversionista) 
  	IngresosInversionista : IngresosInversionista[]

	@OneToMany(() => EgresosInversionista, (EgresosInversionista) => EgresosInversionista.EstadoCuentaInversionista) 
  	EgresosInversionista : EgresosInversionista[]	

}