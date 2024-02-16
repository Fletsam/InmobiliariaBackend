export class CreateCasasDto {
  id?: number;
  nombre: string;
  costo: number;
  cuartos: number;
  baños: number;
  cochera: number;
  direccion: string;
  estado: string;
  m2: string;
  fichaimagen: string;
  clase: "exclusiva" | "conveniencia";
}