import { Abono } from 'src/abonos/abono.endity';
import { EgresosSubConceptosProveedor } from 'src/egresossubconceptosproveedor/egresossubconceptosproveedor';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Rfcs {
  @PrimaryGeneratedColumn()
  idrfc: number;

  @Column()
  rfc: string;

  @Column({ type: 'longtext', nullable: true })
  razon: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  codpos: string;

  @Column()
  estatus: string;

  @Column()
  fechahora: Date;

/*   @Column()
  idcreacion: number; */

  @Column()
  fhmodificacion: Date;

  @OneToMany(() => Abono, (abono) => abono.idrfc) 
  Abonos : Abono[]

   @OneToMany(() => EgresosSubConceptosProveedor, (egresossubconceptosproveedor) => egresossubconceptosproveedor.idrfc) 
  EgresosSubConceptosProveedor : EgresosSubConceptosProveedor[]

  @ManyToOne(() => Usuarios, (usuario) => usuario.Rfcs) 
  idcreacion : Usuarios

  

}
