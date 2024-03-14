export class CreateIngresosContratosDto {
  id?: number;
  contratoId: number;
  concepto: string;
  montoingreso:number
  fhcreacion:Date
  estadocuentacontratoId: number;
}