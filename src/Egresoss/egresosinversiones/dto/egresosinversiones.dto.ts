export class CreateEgresosInversionistaDto {
  id?: number;
  concepto?: string;
  montoegreso: number;
  fhcreacion: Date;
  estadoCuentaInversionistaId: number;
  contratosInversionistaId: number;
}
