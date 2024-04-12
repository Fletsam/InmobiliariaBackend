export class createAbonoGerenciaDto {
 	id?: number;
  ingreso: number;
  egreso: number;
  concepto: string;
  folio: string;
  formadepago: string;
  saldo: number;
  fechadecreacion: Date;
  gerenciaId: number;
  usuarioId: number;
}