import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class EstadoCuentaContrato {

	@PrimaryGeneratedColumn()
	id:number

	@OneToOne(() => Contratos)
	@JoinColumn()
	contrato: Contratos
	@Column()
	contratoId: number;

	@Column()
	montoingreso:number

	@Column()
	montoegreso:number

	@Column()
	cuentasaldo:number

	@OneToMany(() => IngresosContratos, (ingresoscontratos) => ingresoscontratos.estadocuentacontrato) 
  	IngresosContratos : IngresosContratos[]

	@OneToMany(() => EgresosContratos, (egresoscontratos) => egresoscontratos.estadocuentacontrato) 
  	EgresosContratos : EgresosContratos[]	

}