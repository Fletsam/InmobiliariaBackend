export class createAbonoGerenciaDto {
 	id?: number;
  ingreso: number;
  egreso: number;
  concepto: string;
  folio: string;
  formadepago: string;
  saldo: number;
  fhcreacion: Date;
  gerenciaId: number;
  usuarioId: number;
  estatus:boolean
  receptor:string
}