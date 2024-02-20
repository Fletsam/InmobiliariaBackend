export class CreateIngresosDto {
  id:number
  
  folio: string;
  fecha: Date;
  monto: number;
  estatus: number;
  fhcreacion: Date;
  idmodificacion: number;
  fhmodificacion: Date;
  conceptoId: number;
  usuarioId: number;
}
