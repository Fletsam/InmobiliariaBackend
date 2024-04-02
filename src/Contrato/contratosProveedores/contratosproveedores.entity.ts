import { Proveedores } from "src/Proveedores/proveedores.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContratosProveedores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  credito: number;

  @Column()
  descuento: number;

  @Column()
  enganche: number;

  @Column()
  resto: number;

  @Column()
  pagosafinanciar: number;

  @Column( {type:'float'})
  interesanual: number;

  @Column()
  pagomensual: number

  @Column()
  montototal: number;

  @Column()
  inicio: Date;

  @Column()
  fecha: Date;
  
  @Column()
  pagado: number;

  @Column()
  estatus: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  /* @Column()
  idmodificacion: number;
 */
/* 
  @Column()
  fhmodificacion: Date; */

  @ManyToOne(() => Usuarios, (usuario) => usuario.ContratosProveedores) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

  @ManyToOne(() => Proveedores, (proveedores) => proveedores.ContratosProveedores) 
  proveedor : Proveedores
  
  @Column()
  proveedorId: number;

}