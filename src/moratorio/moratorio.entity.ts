import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Moratorio {
  @PrimaryGeneratedColumn()
   id: number;
  

  @Column()
  interes: number;

  @Column()
  dias: number;

  @ManyToOne(()=>  Usuarios ,(usuario) => usuario.Moratorio)
  usuario  : Usuarios
  
  @Column()
  	usuarioId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;
}
