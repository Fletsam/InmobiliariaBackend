export class CreateEgresosFraccionamientoDto {
	id?:number
	concepto:string
	monto:number
	fhcreacion:Date
	estadocuentafraccionamientoId: number
	fraccionamientoId: number
}