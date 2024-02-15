import { Parcelas } from 'src/parcelas/parcelas.entity';
import { Proyectos } from 'src/proyectos/proyectos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ParcelasProyectos {
  /* @PrimaryGeneratedColumn()
  idparcela: number; */

  /* @Column()
  idproyecto: number; */

  /* @Column()
  idcreacion: number;
 */
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Usuarios, (usuario) => usuario.ParcelasProyectos) 
  idcreacion : Usuarios

  @ManyToOne(() => Proyectos, (proyecto) => proyecto.ParcelasProyectos) 
  idproyecto : Proyectos

  @ManyToOne(() => Parcelas, (parcela) => parcela.ParcelasProyectos) 
  idparcela : Parcelas
 

}
