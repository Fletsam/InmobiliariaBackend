export class CreateRfcsDto {
  id: number;
  rfc: string;
  razon: string;
  email: string;
  telefono: string;
  direccion: string;
  codpos: string;
  estatus: string;
  fhcreacion: Date;
  usuarioId?: number;
  fhmodificacion: Date;
  
}
