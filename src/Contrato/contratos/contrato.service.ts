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

@Injectable()
export class ContratoService {
	constructor(
	@InjectRepository(Contratos) private contratosRepository: Repository<Contratos>, 
	@InjectRepository(Lotes) private lotesRepository : Repository<Lotes>,
	@InjectRepository(IngresosContratos) private ingresoContratosRepository : Repository<IngresosContratos>,
	@InjectRepository(EgresosContratos) private egresoContratosRepository : Repository<EgresosContratos>,
	@InjectRepository(IngresosFraccionamientos) private ingresosFraccionamientoRepository : Repository<IngresosFraccionamientos>,
	@InjectRepository(EstadoCuentaContrato) private estadoCuentaContratoRepository : Repository<EstadoCuentaContrato>,
	@InjectRepository(Clientes) private clientesRepository : Repository<Clientes>,
	) {}
	

	async getContratos() {
	const items = await this.contratosRepository.find()
	return {data : items, status: HttpStatus.OK }
	}
 
	
  async createContrato(contrato: CreateContratoDto, id:number ){

	const Lote = await this.lotesRepository.findOne( {where : {id}} )
	const precioTotalpormetro2 = (Lote.m2 * contrato.preciom2)
	const CostoaFinanciar = (precioTotalpormetro2 - contrato.descuento - contrato.enganche)
	const montodeinteres = ((contrato.pagosafinanciar/12)*contrato.interesanual)*CostoaFinanciar
	const TotalconIntereses = (CostoaFinanciar+montodeinteres)
	const pagoMensual = (CostoaFinanciar+montodeinteres)/contrato.pagosafinanciar

	const newFlag = { 
		...contrato, 
		fhcreacion: new Date(), 
		costo: precioTotalpormetro2 , 
		loteId : Lote.id ,
		id: Lote.id, 
		metros2 : Lote.m2 , 
		resto:CostoaFinanciar , 
		montototal: TotalconIntereses , 
		montodeinteres: montodeinteres,
		pagomensual: pagoMensual,
		estadocuentaId: Lote.id,
		
	}

	const newItem = await this.contratosRepository.create({...newFlag})
	const Saved = await this.contratosRepository.save({...newItem})

	 const estadocuenta:CreateEstadoCuentaContratoDto = { 
		id: Lote.id,
		contratoId: Lote.id, 
		montoingreso: contrato.pagado,
		montoegreso: TotalconIntereses,
		cuentasaldo : (TotalconIntereses - contrato.pagado),
		} 

	await this.estadoCuentaContratoRepository.create({...estadocuenta})
	await this.estadoCuentaContratoRepository.save({...estadocuenta})

	const newIngreso:CreateIngresosContratosDto = { 
			concepto:"Enganche",
			montoingreso: contrato.enganche, 
			contratoId : Lote.id ,
			estadocuentacontratoId : Lote.id,
		}
	await this.createIngresoContratos({...newIngreso})


	const newEgreso:CreateEgresosContratosDto = { 
			concepto:"Monto Total con intereses",
			montoegreso: TotalconIntereses, 
			contratoId : Lote.id ,
			estadocuentacontratoId : Lote.id,
		}
	await this.createEgresoContratos({...newEgreso})

	const newIngresoFracc:CreateIngresosFraccionamientoDto = { 
			concepto:"Monto Total con intereses",
			montoingreso: TotalconIntereses, 
			contratoId : Lote.id ,
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


	async createIngresoFraccionamiento(ingresosfraccionamientos:CreateIngresosFraccionamientoDto) {

	
		const newItem = await this.ingresosFraccionamientoRepository.create({...ingresosfraccionamientos})
		const Saved = await this.ingresosFraccionamientoRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}

}