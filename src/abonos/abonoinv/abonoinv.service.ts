import { BadRequestException, Controller, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { CreateIngresosContratosDto } from "src/Ingresoss/ingresoscontratos/dto/ingresoscontratos.dto";
import { AbonosInv } from "./abonoinv.entity";
import { ContratosInversionista } from "src/Contrato/contratosInversionista/contratoinversionista.entity";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { CreateAbonoInvDto } from "./dto/abonoinv.dto";
import { CreateIngresosInversionesDto } from "src/Ingresoss/ingresosinversiones/dto/ingresosinversiones.dto";

@Injectable()

export class AbonoInvService {

	constructor(
	@InjectRepository(AbonosInv) private abonoInvRepository: Repository<AbonosInv> , 
    @InjectRepository(ContratosInversionista) private contratosInversionistaRepository: Repository<ContratosInversionista>, 
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
    @InjectRepository(IngresosInversionista) private ingresoInversionistaRepository: Repository<IngresosInversionista>,
    ) {}
   
    

async getAbonos() {
	const abonos = await this.abonoInvRepository.find()
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonosByUsuario(id:number) {
  const foundUsuario = await this.usuarioRepository.findOne( {where: {id}} ) 
	const abonos = await this.abonoInvRepository.find({ 
    where: { usuarioId : foundUsuario.id }
  })
  
  
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonobyId(id: number) {
    const AbonoFound = await this.abonoInvRepository.findOne({
      where: { id }, relations : ["contratosInversionista", "contratosInversionista.cliente"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound;
  }

  async createAbonoContrato(abono: CreateAbonoInvDto , id:number){
      const contrato = await this.contratosInversionistaRepository.findOne({where : {id}})
     const newAbonoFlag = { ...abono, fhcreacion: new Date()}
	  
      const saldo = (contrato.montototal + newAbonoFlag.credito - newAbonoFlag.pago + contrato.pagado )
        const newAbono = await this.abonoInvRepository.create({...newAbonoFlag , saldo:saldo })
        const AbonoSaved = await this.abonoInvRepository.save({...newAbono })
      
      await this.getTotalMontoContrato(AbonoSaved.contratosInversionistaId)
      return[{ data:AbonoSaved,  status : HttpStatus.OK}]

  }

  async editAbono ( id:number, contratoId:number, abono){
    const abonoFlag = {...abono, contratoId:contratoId }
    const updatedAbono = await this.abonoInvRepository.update(
      { id},
      {...abonoFlag},
    )
    if (updatedAbono.affected=== 0) {
      throw new BadRequestException({
        data:null,
        message: "no se ha podido actualizar",
        status: HttpStatus.CONFLICT
      })
    }
    await this.getTotalMontoContrato(contratoId)
    return { data:abonoFlag , status: HttpStatus.OK}
  }

  async getTotalMontoContrato (id:number) {
    const found = await this.contratosInversionistaRepository.findOne({where :{id}})
    const abonos = await this.abonoInvRepository.find({ 
    where: {contratosInversionistaId: found.id}
      })
    const totalMontos = abonos.reduce((total,monto) => total + monto.pago , 0 )
      found.pagado = totalMontos 
      
    return this.contratosInversionistaRepository.save(found) 
  }

	async createIngresoAbono(ingresoabono){
		const newFlag:CreateIngresosInversionesDto = {
      ...ingresoabono , 
      estadoCuentaInversionistaId:ingresoabono.contratosInversionistaId , 
      contratosInversionistaId:ingresoabono.contratosInversionistaId , 
      concepto:"Abono" , 
      fhcreacion: new Date()
		}
		const newItem = await this.ingresoInversionistaRepository.create({...newFlag})
		const Saved = await this.ingresoInversionistaRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}
}

