export class CreateParcelaPenalizacionDto {
  id:number
  fecha: Date;
  monto: number;
  observaciones: string;
  idcreacion: number;
  fhcreacion: Date;
  parcelaId: number;
  usuarioId: number;
}
