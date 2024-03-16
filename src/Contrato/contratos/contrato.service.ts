import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contratos } from "./contratos.entity";
import { Repository } from "typeorm";
import { CreateContratoDto } from "./dto/contratos.dto";
import { CreateIngresosContratosDto } from "src/Ingresoss/ingresoscontratos/dto/ingresoscontratos.dto";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { CreateEstadoCuentaContratoDto } from "src/EstadosCuenta/EstadoCuentaContrato/dto/estadocuentacontrato.dto";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { CreateEgresosContratosDto } from "src/Egresoss/egresoscontratos/dto/egresoscontratos.dto";
import { Lotes } from "src/Fraccionamiento/lotes/lotes.entity";
import { CreateIngresosFraccionamientoDto } from "src/Ingresoss/ingresosfraccionamientos/dto/ingresosfraccionamientos.dto";
import { IngresosFraccionamientos } from "src/Ingresoss/ingresosfraccionamientos/ingresosfraccionamientos.entity";
import { Clientes } from "src/Cliente/clientes/clientes.entity";
import { Fraccionamientos } from "src/Fraccionamiento/fraccionamientos/fraccionamientos.entity";
import { CreateEstadoCuentaFraccionamientoDto } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/dto/estadocuentafraccionamiento.dto";
import { CreateEgresosFraccionamientoDto } from "src/Egresoss/egresosfraccionamiento/dto/egresosfraccionamiento.dto";
import { EgresosFraccionamiento } from "src/Egresoss/egresosfraccionamiento/egresosfraccionamiento.entity";
import { ContratosFracc } from "../contratosFracc/contratosfracc.entity";
import { CreateContratoFracc } from "../contratosFracc/dto/contratosfracc.dto";
import { EstadoCuentaFraccionamiento } from "src/EstadosCuenta/EstadoCuentaFraccionamiento/estadocuentafraccionamiento.entity";
import { ContratosInversionista } from "../contratosInversionista/contratoinversionista.entity";
import { CreateContratoInversionistaDto } from "../contratosInversionista/dto/contratoinversionista.dto";
import { CreateEstadoCuentaInversionistaDto } from "src/EstadosCuenta/EstadoCuentaInversionista/dto/estadocuentainversionista.dto";
import { CreateIngresosInversionesDto } from "src/Ingresoss/ingresosinversiones/dto/ingresosinversiones.dto";
import { IngresosInversionista } from "src/Ingresoss/ingresosinversiones/ingresosinversiones.entity";
import { EstadoCuentaInversionista } from "src/EstadosCuenta/EstadoCuentaInversionista/estadocuentainversionista.entity";
import { EgresosInversionista } from "src/Egresoss/egresosinversiones/egresosinversiones.entity";
import { CreateEgresosInversionistaDto } from "src/Egresoss/egresosinversiones/dto/egresosinversiones.dto";

@Injectable()
export class ContratoService {
	constructor(
	//contratos lotes
		@InjectRepository(Contratos) private contratosRepository: Repository<Contratos>, 
		@InjectRepository(Lotes) private lotesRepository : Repository<Lotes>,
		@InjectRepository(EstadoCuentaContrato) private estadoCuentaContratoRepository : Repository<EstadoCuentaContrato>,
		@InjectRepository(IngresosContratos) private ingresoContratosRepository : Repository<IngresosContratos>,
		@InjectRepository(EgresosContratos) private egresoContratosRepository : Repository<EgresosContratos>,
		@InjectRepository(Clientes) private clientesRepository : Repository<Clientes>,
	//contratos Fracc
		@InjectRepository(ContratosFracc) private contratosFraccRepository: Repository<ContratosFracc>, 
		@InjectRepository(Fraccionamientos) private fraccRepository : Repository<Fraccionamientos>,
		@InjectRepository(IngresosFraccionamientos) private ingresosFraccionamientoRepository : Repository<IngresosFraccionamientos>,
		@InjectRepository(EgresosFraccionamiento) private egresosFraccionamientoRepository : Repository<EgresosFraccionamiento>,
		@InjectRepository(EstadoCuentaFraccionamiento) private estadoCuentaContratoFraccRepository : Repository<EstadoCuentaFraccionamiento>,

	//contratos Inversionista 
		@InjectRepository(ContratosInversionista) private contratosInvRepository: Repository<ContratosInversionista>,
		@InjectRepository(IngresosInversionista) private ingresosInvRepository : Repository<IngresosInversionista>,
		@InjectRepository(EgresosInversionista) private egresosInvRepository : Repository<EgresosInversionista>,
		@InjectRepository(EstadoCuentaInversionista) private estadoCuentaContratoInversionistaRepository : Repository<EstadoCuentaInversionista>,
	) {}
	

	
	
 
	 //---------------------Lotes Contratos --------------------------///	

	 
  async createContrato(contrato: CreateContratoDto, id:number ){
	const Lote = await this.lotesRepository.findOne( {where : {id}} )
	const precioTotalpormetro2 = (Lote.m2 * contrato.preciom2)
	const CostoaFinanciar = (precioTotalpormetro2 - contrato.descuento - contrato.enganche)
	const montodeinteres = ((contrato.pagosafinanciar/12)*contrato.interesanual)*CostoaFinanciar
	const TotalconIntereses = (CostoaFinanciar+montodeinteres)
	const TotalReal = (precioTotalpormetro2+montodeinteres)
	const pagoMensual = (CostoaFinanciar+montodeinteres)/contrato.pagosafinanciar

	const newFlag = { 
		...contrato,
		id:Lote.id, 
		fhcreacion: new Date(), 
		costo: precioTotalpormetro2 , 
		loteId : Lote.id ,
		metros2 : Lote.m2 , 
		resto:CostoaFinanciar , 
		montototal: TotalReal , 
		montodeinteres: montodeinteres,
		pagomensual: pagoMensual,
		estadocuentaId: Lote.id,
		
	}

	const newItem = await this.contratosRepository.create({...newFlag})
	const Saved = await this.contratosRepository.save({...newItem})

	 const estadocuenta:CreateEstadoCuentaContratoDto = { 
			id:Lote.id,
		contratoId: Lote.id, 
		montoingreso: contrato.pagado,
		montoegreso: TotalReal,
		cuentasaldo : (TotalReal - contrato.pagado),
		} 

	await this.estadoCuentaContratoRepository.create({...estadocuenta})
	await this.estadoCuentaContratoRepository.save({...estadocuenta})

	const newIngreso:CreateIngresosContratosDto = { 
			concepto:"Enganche",
			montoingreso: contrato.enganche, 
			contratoId : Lote.id ,
			estadocuentacontratoId : Lote.id,
			fhcreacion:new Date
		}
	await this.createIngresoContratos({...newIngreso})


	const newEgreso:CreateEgresosContratosDto = { 
			concepto:`Monto Total con intereses  --- ${Lote.clave}`,
			montoegreso: TotalReal, 
			contratoId : Lote.id ,
			estadocuentacontratoId : Lote.id,
		}
	await this.createEgresoContratos({...newEgreso})

	const newEgresoComision:CreateEgresosContratosDto = { 
			concepto:`Comision de ${contrato.usuarioId}`,
			montoegreso: contrato.comision, 
			contratoId : Lote.id ,
			estadocuentacontratoId : Lote.id,
		}
	await this.createEgresoContratos({...newEgresoComision})

	const newIngresoFracc:CreateIngresosFraccionamientoDto = { 
			concepto:`Monto Total con intereses --- ${Lote.clave}`,
			montoingreso: TotalReal, 
			
			contratosFraccId: Lote.fraccionamientoId,
			estadocuentafraccionamientoId : Lote.fraccionamientoId,
			fhcreacion: new Date()
		}
	await this.createIngresoFraccionamiento({...newIngresoFracc})	
	
	const newLote ={
		...Lote,
		contratoId:Lote.id
	}	
	await this.lotesRepository.save(newLote)

	return{ data:Saved, status : HttpStatus.OK}
  }

  async getContratoById(id: number) {
    const Found = await this.contratosRepository.findOne({
      where: { id }, relations: ["IngresosContratos", "EgresosContratos"]
    });
	
	const Cliente = await this.clientesRepository.findOne({where:{id:Found.clientesId}})
	const Lote = await this.lotesRepository.findOne({where:{id:Found.loteId}})
	const monto = Found.IngresosContratos.reduce((monto, item) => monto + item.montoingreso,0 )
		Found.pagado = monto
		
		
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Contrato not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return {Found, Cliente, Lote};
  }

  async getContratosLote() {
	const items = await this.contratosRepository.find({relations:["Lote"]})
	return {data : items, status: HttpStatus.OK }
	}



  //---------------------Fraccionamiento Contratos --------------------------///
 
 
  async createContratoFracc(contratofracc: CreateContratoFracc, id:number ){
	const fracc = await this.fraccRepository.findOne( {where : {id}} )
	
	
	const precioTotalpormetro2 = (fracc.m2 * contratofracc.preciom2)
	
	const CostoaFinanciar = (precioTotalpormetro2 - contratofracc.descuento - contratofracc.enganche)
	const montodeinteres = ((contratofracc.pagosafinanciar/12)*contratofracc.interesanual)*CostoaFinanciar
	const TotalconIntereses = (CostoaFinanciar+montodeinteres)
	const TotalReal = (precioTotalpormetro2+montodeinteres)
	const TotalDespuesdeComision = (TotalReal-contratofracc.comision)
	const pagoMensual = (CostoaFinanciar+montodeinteres)/contratofracc.pagosafinanciar

	const newFlag = { 
		...contratofracc, 
		fhcreacion: new Date(), 
		costo: precioTotalpormetro2 , 
		fraccionamientoId : fracc.id , 
		contratosFraccId: fracc.id,
		metros2 : fracc.m2 , 
		resto:CostoaFinanciar , 
		montototal: TotalReal , 
		montodeinteres: montodeinteres,
		pagomensual: pagoMensual,
		estadoCuentaFraccionamientoId: fracc.id,
	}

	const newItem = await this.contratosFraccRepository.create({...newFlag})
	const Saved = await this.contratosFraccRepository.save({...newItem})

	 const estadocuenta:CreateEstadoCuentaFraccionamientoDto = {
		id: fracc.id, 
		nombre: fracc.nombre,
		contratosFraccId: fracc.id, 
		montoingreso: contratofracc.pagado,
		montoegreso: TotalReal,
		cuentasaldo : (TotalReal - contratofracc.pagado),
		} 

	await this.estadoCuentaContratoFraccRepository.create({...estadocuenta})
	await this.estadoCuentaContratoFraccRepository.save({...estadocuenta})

	const newIngreso:CreateIngresosFraccionamientoDto = { 
			concepto:"Enganche",
			montoingreso: contratofracc.enganche,
			/* contratoId: fracc.id,  */
			contratosFraccId : fracc.id ,
			estadocuentafraccionamientoId : fracc.id,
			fhcreacion:new Date()
		}
	await this.createIngresoFraccionamiento({...newIngreso})


	const newEgreso:CreateEgresosFraccionamientoDto = { 
			concepto:`Monto Total con intereses de ${fracc.nombre}` ,
			montoegreso: TotalReal, 
			contratosFraccId : fracc.id ,
			estadocuentafraccionamientoId : fracc.id,
			fhcreacion: new Date()
		}
	await this.createEgresoFraccionamiento({...newEgreso})
	
	const newEgresoComision:CreateEgresosFraccionamientoDto = { 
			concepto:`Comision` ,
			montoegreso: contratofracc.comision, 
			contratosFraccId : fracc.id ,
			estadocuentafraccionamientoId : fracc.id,
			fhcreacion: new Date()
		}
	await this.createEgresoFraccionamiento({...newEgresoComision})


	
	const newfracc ={
		...fracc,
		contratoFraccId:fracc.id
	}	
	await this.fraccRepository.save(newfracc)

	return{ data:Saved, status : HttpStatus.OK}
  }

	async getContratoByIdFracc(id: number) {
    const Found = await this.contratosFraccRepository.findOne({
      where: { id }, relations: ["Fraccionamiento"]
    });
	
		
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Contrato not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return Found;
  }

	async getContratosFracc() {
	const items = await this.contratosFraccRepository.find({relations:["Fraccionamiento"]})
	return {data : items, status: HttpStatus.OK }
	}


 //---------------------Inversionistas Contratos --------------------------///
 
async createContratoInversionista(contratoinversionista: CreateContratoInversionistaDto, id:number ){
	const cliente = await this.clientesRepository.findOne({where:{id}})
	const montodeinteres = ((contratoinversionista.pagosafinanciar/contratoinversionista.pagosafinanciar)*(contratoinversionista.interesmensual*contratoinversionista.pagosafinanciar))*contratoinversionista.monto
	const TotalconIntereses = (contratoinversionista.monto+montodeinteres)
	/* const TotalReal = (precioTotalpormetro2+montodeinteres) */
	const TotalDespuesdeComision = (contratoinversionista.monto-contratoinversionista.comision)
	const pagoMensual = (contratoinversionista.monto+montodeinteres)/contratoinversionista.pagosafinanciar
	console.log(cliente.id);
	
	
	
	const newFlag:CreateContratoInversionistaDto = { 
		...contratoinversionista,
		
		nombre: cliente.nombre,
		utilidad: (TotalDespuesdeComision) ,
		fhcreacion: new Date(),  
		clienteId : cliente.id ,   
		montototal: TotalconIntereses , 
		montodeintereses: montodeinteres,
		pagomensual: pagoMensual,
	}

	const newItem = await this.contratosInvRepository.create({...newFlag})
	const Saved = await this.contratosInvRepository.save({...newItem})
	
	  const estadocuenta:CreateEstadoCuentaInversionistaDto =  {
		id:Saved.id,
		contratoInversionistaId: Saved.id, 
		montoingreso: contratoinversionista.pagado,
		montoegreso: TotalconIntereses,
		cuentasaldo : (TotalconIntereses - contratoinversionista.pagado),
		} 

	await this.estadoCuentaContratoInversionistaRepository.create({...estadocuenta})
	await this.estadoCuentaContratoInversionistaRepository.save({...estadocuenta})

	/* const newIngreso:CreateIngresosInversionesDto = { 
			concepto:"Monton neto de la Inversión",
			montoingreso: contratoinversionista.monto,
			contratosInversionistaId : contratoinversionista.id ,
			estadoCuentaInversionistaId : contratoinversionista.id,
			fhcreacion:new Date()
		}
	await this.ingresosInvRepository.create({...newIngreso})
	await this.ingresosInvRepository.save({...newIngreso})
 */

	const newEgresoIntereses:CreateEgresosInversionistaDto =  { 
			concepto:`Monto de intereses` ,
			montoegreso: montodeinteres, 
			contratosInversionistaId : Saved.id ,
			estadoCuentaInversionistaId : Saved.id,
			fhcreacion: new Date()
		}
	await this.egresosInvRepository.create({...newEgresoIntereses})
	await this.egresosInvRepository.save({...newEgresoIntereses})

	const newEgreso:CreateEgresosInversionistaDto =  { 
			concepto:`Monto de la Inversion` ,
			montoegreso: contratoinversionista.monto, 
			contratosInversionistaId : Saved.id ,
			estadoCuentaInversionistaId : Saved.id,
			fhcreacion: new Date()
		}
	await this.egresosInvRepository.create({...newEgreso})
	await this.egresosInvRepository.save({...newEgreso})
	
	const newEgresoComision:CreateEgresosInversionistaDto =   { 
			concepto:`Comision` ,
			montoegreso: contratoinversionista.comision, 
			contratosInversionistaId : Saved.id ,
			estadoCuentaInversionistaId : Saved.id,
			fhcreacion: new Date()
		}
	await this.egresosInvRepository.create({...newEgresoComision})
	await this.egresosInvRepository.save({...newEgresoComision})



	return{ data:Saved, status : HttpStatus.OK}
  }


  async getContratoByIdInv(id: number) {
    const Found = await this.contratosInvRepository.findOne({
      where: { id }, relations: ["cliente"]
    });
	
    if (!Found) {
      throw new BadRequestException({
        data: null,
        message: 'Contrato not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return {contratoInv : Found, clienteInv: Found.cliente};
  }


//----------------------------------------------------------------------------------------------------------------------//

  	async createIngresoContratos(ingresoscontratos:CreateIngresosContratosDto) {
	
		const newItem = await this.ingresoContratosRepository.create({...ingresoscontratos})
		const Saved = await this.ingresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}

	}

	async createEgresoContratos(egresoscontrato:CreateEgresosContratosDto) {

	
		const newItem = await this.egresoContratosRepository.create({...egresoscontrato})
		const Saved = await this.egresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}

	}
	async createEgresoFraccionamiento(egresosfraccionamiento:CreateEgresosFraccionamientoDto) {

	
		const newItem = await this.egresosFraccionamientoRepository.create({...egresosfraccionamiento})
		const Saved = await this.egresosFraccionamientoRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}

	}


	async createIngresoFraccionamiento(ingresosfraccionamientos:CreateIngresosFraccionamientoDto) {

	
		const newItem = await this.ingresosFraccionamientoRepository.create({...ingresosfraccionamientos})
		const Saved = await this.ingresosFraccionamientoRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}

}