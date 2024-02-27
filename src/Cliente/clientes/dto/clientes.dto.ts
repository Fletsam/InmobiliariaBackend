

export class CreateClientesDto {
  id: number;
  nombre: string;
  genero: "Masculino" | "Femenino"
  calle: string;
  numeroext : string
  numeroint?: string
  colonia:string
  cp: string
  ciudad: string
  estadocivil: "Soltero" | "Casado" | "Divorciado" | "Separado" | "Viudo" | "Concubinato"
  correo: string;
  telefono: string;
  curp: string
  ocupacion: string
  lugardetrabajo: string
  telefonodetrabajo: string
  referencia: string
  telefonodereferencia:string
  fhcreacion: Date;
  idmodificacion: number;
  fhmodificacion?: Date;
  usuarioId: number;
  idcreacion?: number
}
