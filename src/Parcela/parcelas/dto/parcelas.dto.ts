export class CreateParcelasDto {
  id: number;
  parcela: string;
  observaciones: string;
  propietario: string;
  costo: number;
  pagado: number;
  estatus: number;
  fhcreacion: Date;
  idmodificacion: number;
  fhmodificacion: Date;
  usuarioId: number;
}
