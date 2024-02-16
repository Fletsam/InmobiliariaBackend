import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Privilegios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  opcion: number;

   @OneToMany(() => Usuarios, (usuario) => usuario.privilegios)
  Usuarios: Usuarios[];
}
