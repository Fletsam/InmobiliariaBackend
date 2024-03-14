
import { Entity,ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Egresos } from '../egresos/egresos.entity';
import { EstadoCuentaInversionista } from 'src/EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.entity';
import { ContratosInversionista } from 'src/Contrato/contratosInversionista/contratoinversionista.entity';

@Entity()
export class EgresosInversionista {
   @PrimaryGeneratedColumn()
	id:number

	@Column()
	concepto: string

	@Column()
	montoegreso:number
	
	@Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
	fhcreacion:Date

	@ManyToOne(() => EstadoCuentaInversionista, (estadocuentainversionista) => estadocuentainversionista.EgresosInversionista )
	EstadoCuentaInversionista : EstadoCuentaInversionista
	@Column()
	estadoCuentaInversionistaId: number

	@ManyToOne(() => ContratosInversionista, (contratosInversionista) => contratosInversionista.EgresosInversionista) 
	ContratosInversionista : ContratosInversionista
	@Column()
	contratosInversionistaId : number
}
