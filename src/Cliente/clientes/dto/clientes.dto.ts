

export class CreateClientesDto {
  id: number;
  nombre: string;
  genero: "masculino" | "femenino"
  calle: string;
  numeroext : string
  numeroint?: string
  colonia:string
  cp: string
  ciudad: string
  estadocivil: "soltero" | "casado" | "divorciado" | "separado" | "viudo" | "concubinato"
  correo: string;
  telefono: string;
  curp: string
  ocupacion: string
  lugardetrabajo: string
  telefonodetrabajo: string
  referencia: string
  telefonodereferencia:string
  fhcreacion: Date;
  estatus:boolean
  /* idmodificacion: number; */
  fhmodificacion?: Date;
  usuarioId: number;
  idcreacion?: number
}
