export class CreateEgresosDto {
  id?: number;
  folio: string;
  fecha: Date;
  monto: number;
  pagado: number;
  estatus: number;
  fhcreacion: Date;
  idmodificacion: number;
  fhmodificacion: Date;
  conceptoId: number;
  usuarioId: number;
}
