
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import { EstadoCuentaInversionista } from 'src/EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.entity';
import { ContratosInversionista } from 'src/Contrato/contratosInversionista/contratoinversionista.entity';

@Entity()
export class IngresosInversionista {
  @PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto: string

	@Column()
	montoingreso: number

	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaInversionista, (estadocuentainversionista) => estadocuentainversionista.IngresosInversionista) 
	EstadoCuentaInversionista : EstadoCuentaInversionista
	@Column()
	estadoCuentaInversionistaId : number

	@ManyToOne(() => ContratosInversionista, (contratosInversionista) => contratosInversionista.IngresosInversionista) 
	ContratosInversionista : ContratosInversionista
	@Column()
	contratosInversionistaId : number
}
