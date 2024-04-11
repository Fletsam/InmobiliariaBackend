export class CreateVendedoresDto{
	 id?: number;
    user: string;
    pass: string;
    estatus: boolean;
    nombre: string;
    telefono: string;
	genero:string;
    curp: string;
    rfc: string;
    colonia: string;
    calle: string;
    numero: string;
    cp: string;
    correo: string;
    estadocivil: string;
	fhcreacion : Date;
    comisiones: number;
    usuarioId: number;
    pagado:number
}