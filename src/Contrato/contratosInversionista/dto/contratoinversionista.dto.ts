export class CreateContratoInversionistaDto {
	id?: number;
  nombre: string;
  testigo1: string;
  testigo2?: string;
  monto: number;
  montodeintereses:number
  pagosafinanciar: number;
  comision: number;
  utilidad:number
  interesanual: number;
  interesmensual: number;
  pagomensual: number;
  montototal: number;
  inicio?: Date;
  fecha?: Date;
  pagado: number;
  estatus: number;
  fhcreacion?: Date;
  usuarioId?: number;
  clienteId?: number;

}