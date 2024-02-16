export class CreateCarteraClientesDto {
  id?: number;
  nombre: string;
  fraccionamiento: string;
  lote: number;
  manzana: number;
  mensualidad: number;
  diadepago: number;
  fechadeprimerpago: Date;
  fechadeliquidacion: Date;
  tasainteres: number;
  mesestranscurridos: number;
  numeroabono: number;
  abono: number;
  mesesafinanciar: number;
  costo: number;
  intereses: number;
  enganche: number;
  totalanualidad: number;
  saldoactual: number;
  pagosparairalcorriente: number;
  anualidadespendientes: number;
  morosos: number;
  adeuda: number;
  porcentajemorosidad: number;
  mesesdeatraso: number;
}