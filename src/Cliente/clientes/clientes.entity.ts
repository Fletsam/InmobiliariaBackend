import { ContratosInversionista } from 'src/Contrato/contratosInversionista/contratoinversionista.entity';
import { ClienteNoInteres } from '../clientesnointeres/clientesnointeres.entity';
import { Contratos } from 'src/Contrato/contratos/contratos.entity';
import { Inversionistas } from 'src/Inversionistass/inversionistas/inversionistas.entity'; 
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
/* import { Propiedades } from 'src/propiedades/propiedades.entity'; */

interface genero {
  genero: "Masculino" | "Femenino" | "PrefieroNoComentarlo"
}


@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  genero: string;

  @Column()
  calle: string

  @Column()
  numeroext:string

  @Column()
  numeroint:string

  @Column()
  colonia:string

  @Column()
  cp:string

  @Column()
  ciudad:string

  @Column()
  estadocivil:string

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  curp: string;

  @Column()
  ocupacion:string

  @Column()
  lugardetrabajo:string

  @Column()
  telefonodetrabajo:string

  @Column()
  referencia:string
  
  @Column()
  telefonodereferencia:string

  @Column({default:true})
  estatus:boolean

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  /* @Column()
  idmodificacion: number; */

  @Column()
  fhmodificacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

  /* @ManyToOne(() => Usuarios, (usuario) => usuario.Clientes) 
  idmodificacion : Usuarios */

  @OneToMany(() => ClienteNoInteres, (clientesnointeres) => clientesnointeres.cliente)
  ClienteNoInteres : ClienteNoInteres[];

  @OneToMany(() => Contratos, (contrato) => contrato.clientes)
  Contratos : Contratos[];
  
  @OneToMany(() => ContratosInversionista, (contratoinversionista) => contratoinversionista.cliente)
  ContratosInversionista : ContratosInversionista[];

  @OneToMany(() => Inversionistas, (inversionista) => inversionista.clientes) 
  Inversionistas : Inversionistas[]
  
/*   @OneToMany(() => Propiedades, (propiedad) => propiedad.clientes) 
  Propiedades : Propiedades[]
 */
}
