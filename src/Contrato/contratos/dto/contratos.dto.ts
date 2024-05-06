export class CreateContratoDto {
   id?: number;
  fraccionamientoId?: number
  loteId?: number;
  testigo1: string;
  testigo2: string;
  metros2: number;
  preciom2: number;
  costo: number;
  comision:number
  descuento: number;
  enganche: number;
  resto: number;
  anualidad:number
  pagosafinanciar: number;
  interesanual: number;
  ingresoneto:number
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
