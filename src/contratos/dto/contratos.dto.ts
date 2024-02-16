export class CreateContratoDto {
  id?: number;
  
  idproyecto: number;
  calle: string;
  numeroext: string;
  numeroint: string;
  colonia: string;
  cp: string;
  ciudad: string;
  idestados: number;
  ocupacion: string;
  estadocivil: string;
  lote: string;
  manzana: string;
  metros2: number;
  preciom2: number;
  costo: number;
  descuento: number;
  enganche: number;
  resto: number;
  pagos: number;
  interesanual: number;
  monto: number;
  abono: number;
  inicio: Date;
  fecha: Date;
  testigo1: string;
  testigo2: string;
  pagado: number;
  estatus: number;
  fhcreacion: Date;
  fhmodficacion: Date;
  usuarioId: number;
  clienteId: number;
}
