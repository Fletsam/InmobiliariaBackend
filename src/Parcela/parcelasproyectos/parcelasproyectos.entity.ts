
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Parcelas } from '../parcelas/parcelas.entity';
import { Proyectos } from 'src/Proyecto/proyectos/proyectos.entity';

@Entity()
export class ParcelasProyectos {
   @PrimaryGeneratedColumn()
   id:number

   @ManyToOne(() => Parcelas, (parcela) => parcela.ParcelasProyectos) 
  parcela : Parcelas

 @Column()
  parcelaId: string;

  /* @Column()
  idproyecto: number; */

  /* @Column()
  idcreacion: number;
 */
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.ParcelasProyectos) 
  usuario : Usuarios

  @Column()
  usuarioId: string;

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.ParcelasProyectos) 
  proyecto : Proyectos

   @Column()
  proyectoId: string;
 
 

}
