export class CreateAbonoVentasDto {
	id?: number;
    abono: number;
    comision: number;
    concepto: string;
    folio: string;
    formadepago: string;
    saldo: number;
    fhcreacion: Date;
    vendedorId: number;
    usuarioId: number;
}