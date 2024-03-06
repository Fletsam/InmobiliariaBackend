export class CreateEgresosFraccionamientoDto {
	id?:number
	concepto:string
	montoegreso:number
	fhcreacion:Date
	estadocuentafraccionamientoId: number
	fraccionamientoId: number
}