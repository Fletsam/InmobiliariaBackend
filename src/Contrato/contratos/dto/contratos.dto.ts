export class CreateContratoDto {
   id?: number;

  loteId: number;
  testigo1: string;
  testigo2: string;
  metros2: number;
  preciom2: number;
  costo: number;
  descuento: number;
  enganche: number;
  resto: number;
  pagosafinanciar: number;
  interesanual: number;
  pagomensual:number
  montototal: number;
  inicio: Date;
  fecha: Date;
  pagado: number;
  estatus: number;
  fhcreacion: Date;
  fhmodificacion?: Date;
  usuarioId: number;
  clientesId: number;
 
}
