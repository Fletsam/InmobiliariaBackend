import { Proveedores } from "src/Proveedores/proveedores.entity";
import { AbonosProv } from "src/abonos/abonoprov/abonoprov.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
  montointereses: number;

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


  @OneToOne(() => Proveedores , (proveedor) => proveedor.contratosProveedores )
  @JoinColumn()
  proveedores: Proveedores
  @Column()
  proveedoresId: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.ContratosProveedores) 
  usuario : Usuarios

  @Column()
  usuarioId: number;

  @OneToMany(() => AbonosProv, (abono) => abono.contratosProveedores) 
  AbonosProv : AbonosProv[]
}