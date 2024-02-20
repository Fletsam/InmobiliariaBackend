
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Ingresos } from '../ingresos/ingresos.entity';
import { Inversionistas } from 'src/Inversionistass/inversionistas/inversionistas.entity';
import { EgresosInversiones } from 'src/Egresoss/egresosinversiones/egresosinversiones.entity';

@Entity()
export class IngresosInversiones {
  @PrimaryGeneratedColumn()

  id:number

    @ManyToOne(() => Ingresos, (ingresos) => ingresos.IngresosInversiones)
  ingreso:Ingresos
 
  /* @Column()
  idinversionista: number; */

  @Column()
  plazo: number;

  @Column()
  rendimiento: number;

  @Column()
  pagado: number;

  @Column()
  fpago: Date;

  @Column()
  tipo: number;


  
  @ManyToOne(() => Inversionistas, (inversionistas) => inversionistas.IngresosInversiones)
  inversionista:Ingresos
  
  @OneToMany(() => EgresosInversiones, (egresosinversiones) => egresosinversiones.egreso) 
  EgresosInversiones : EgresosInversiones[]

}
