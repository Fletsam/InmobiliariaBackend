import { Parcelas } from 'src/parcelas/parcelas.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ParcelasPenalizacion {
  @PrimaryGeneratedColumn()
  idpenalizacion: number;

 /*  @Column()
  idparcela: number; */

  @Column()
  fecha: Date;

  @Column()
  monto: number;

  @Column({ type: 'longtext', nullable: true })
  observaciones: string;

  /* @Column()
  idcreacion: number; */

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fhcreacion: Date;

  @ManyToOne(() => Parcelas, (parcela) => parcela.ParcelasPenalizacion) 
  idparcela : Parcelas

@ManyToOne(() => Usuarios, (usuario) => usuario.ParcelasPenalizacion) 
  idcreacion : Usuarios
  

}
