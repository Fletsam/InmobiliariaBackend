export class CreateEstadoCuentaFraccionamientoDto {
	
  id?: number;
  nombre: string;
  concepto?:string
  montoingreso: number;
  montoegreso: number;
  cuentasaldo: number;
  contratosFraccId:number
}