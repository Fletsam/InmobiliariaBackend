import { EgresosInversiones } from 'src/egresosinversiones/egresosinversiones.entity';
import { Ingresos } from 'src/ingresos/ingresos.entity';
import { Inversionistas } from 'src/inversionistas/inversionistas.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

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
