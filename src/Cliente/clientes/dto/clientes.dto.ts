export class CreateClientesDto {
  id: number;
  clave: string;
  nombre: string;
  genero: string;
  correo: string;
  telefono: string;
  nointeres: number;
  fhcreacion: Date;
  idmodificacion: number;
  fhmodificacion: Date;
  usuarioId: number;
}
