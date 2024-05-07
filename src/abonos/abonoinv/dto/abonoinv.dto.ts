export class CreateAbonoInvDto {
	id?: number;
  pago: number;
  saldo: number
  credito: number
  concepto :string
  formadepago: string
  folio: string
  usuarioId: number;
  fhcreacion: Date;
  contratosInversionistaId?:number
}