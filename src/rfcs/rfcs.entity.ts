import { Abono } from 'src/abonos/abono.entity';
import { EgresosSubConceptosProveedor } from 'src/egresossubconceptosproveedor/egresossubconceptosproveedor';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Rfcs {
  @PrimaryGeneratedColumn()
  id: number;

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

 @CreateDateColumn({
    type: 'datetime',
    default: () => { 'CURRENT_TIMESTAMP'},
  })
  fhcreacion: Date;

/*   @Column()
  idcreacion: number; */

  @Column()
  usuarioId:number


  @Column()
  fhmodificacion: Date;

  @OneToMany(() => Abono, (abono) => abono.rfc) 
  Abonos : Abono[]

   @OneToMany(() => EgresosSubConceptosProveedor, (egresossubconceptosproveedor) => egresossubconceptosproveedor.rfc) 
  EgresosSubConceptosProveedor : EgresosSubConceptosProveedor[]

  @ManyToOne(() => Usuarios, (usuario) => usuario.Rfcs) 
  usuario : Usuarios

  

}
