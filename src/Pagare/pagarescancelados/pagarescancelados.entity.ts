
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pagares } from '../pagares/pagares.entity';

@Entity()
export class PagaresCancelados {

  @PrimaryGeneratedColumn()
  id: number;

  /* @Column()
  idcancelacion: number; */

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.PagaresCancelados)
  usuario  : Usuarios

 @Column()
  usuarioId: string;

  @ManyToOne(()=>  Pagares ,(pagares) => pagares.PagaresCancelados)
  pagare  : Pagares
 
  @Column()
  pagareId: string;


  @Column()
  fhcancelacion: number;
}
