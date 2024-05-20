import { BadRequestException, Controller, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { Between, Repository } from "typeorm";
import { CreatAbonoDto } from "./dto/abono.dto";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { CreateIngresosContratosDto } from "src/Ingresoss/ingresoscontratos/dto/ingresoscontratos.dto";
import { CreateEgresosContratosDto } from "src/Egresoss/egresoscontratos/dto/egresoscontratos.dto";
import { EgresosContratos } from "src/Egresoss/egresoscontratos/egresoscontratos.entity";
import { EstadoCuentaContrato } from "src/EstadosCuenta/EstadoCuentaContrato/estadocuentacontrato.entity";
import { createAbonoFraccDto } from "./abonofracc/dto/abonofracc.dto";
import { ContratosFracc } from "src/Contrato/contratosFracc/contratosfracc.entity";
import { AbonosFracc } from "./abonofracc/abonofracc.entity";
import { ContratosProveedores } from "src/Contrato/contratosProveedores/contratosproveedores.entity";
import { AbonosProv } from "./abonoprov/abonoprov.entity";
import { createAbonoProvDto } from "./abonoprov/dto/abonoprov.dto";
import { CreateAbonoVentasDto } from "./abonoventas/dto/abonoventas.dto";
import { Vendedores } from "src/vendedores/vendedores.entity";
import { AbonosVentas } from "./abonoventas/abonoventas.entity";
import { Gerencia } from "src/gerencia/gerencia.entity";
import { AbonosGerencia } from "./abonogerencia/abonogerencia.entity";
import { createAbonoGerenciaDto } from "./abonogerencia/dto/abonogerencia.dto";
import { Dias } from "src/gerencia/dias/dias.entity";
import { AbonosNomina } from "./abonosnomina/abonosnomina.entity";
import {createAbonoNominaDto} from "./abonosnomina/dto/abonosnomina.dto"
import { AbonosInv } from "./abonoinv/abonoinv.entity";

@Injectable()

export class AbonoService {

	constructor(
		@InjectRepository(Abono) private abonoRepository: Repository<Abono> , 
    @InjectRepository(Contratos) private contratoRepository: Repository<Contratos>, 
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
    @InjectRepository(EstadoCuentaContrato) private estadoCuentaContratoRepository: Repository<EstadoCuentaContrato>,
    @InjectRepository(IngresosContratos) private ingresoContratosRepository: Repository<IngresosContratos>,
    @InjectRepository(EgresosContratos) private egresoContratosRepository: Repository<EgresosContratos>,
  //ContratosFraccs
    @InjectRepository(ContratosFracc) private contratosFraccRepository: Repository<ContratosFracc>,
    @InjectRepository(AbonosFracc) private abonosFraccRepository: Repository<AbonosFracc>,
  //ContratosProveedores 
    @InjectRepository(ContratosProveedores) private contratosProvRepository: Repository<ContratosProveedores>,
    @InjectRepository(AbonosProv) private abonosProvRepository: Repository<AbonosProv>,
  //Vendedores  
    @InjectRepository(Vendedores) private vendedoresRepository: Repository<Vendedores>,
    @InjectRepository(AbonosVentas) private abonosVentasRepository: Repository<AbonosVentas>,
  //Gerencia  
    @InjectRepository(Gerencia) private gerenciaRepository: Repository<Gerencia>,
    @InjectRepository(Dias) private diasRepository: Repository<Dias>,
    @InjectRepository(AbonosGerencia) private abonosGerenciaRepository: Repository<AbonosGerencia>,
  //Nomina  
    @InjectRepository(AbonosNomina) private abonosNominaRepository: Repository<AbonosNomina>,
  //Inversionistas
    @InjectRepository(AbonosInv) private abonosInvRepository: Repository<AbonosInv>,
    
    ) {}
   
    

async getAbonos() {
	const abonos = await this.abonoRepository.find()
	return {data : abonos, status: HttpStatus.OK }
}
async getAbonosMes() {
  
	const abonos = await this.abonoRepository.find( { relations: ["contrato" ,"contrato.clientes"]})
  const abonosProv = await this.abonosProvRepository.find( {relations: ["contratosProveedores.proveedores"]})
  const abonosFracc = await this.abonosFraccRepository.find(  {relations: ["contratosFracc.Fraccionamiento"]})
  const abonosVentas = await this.abonosVentasRepository.find(  {relations: ["vendedor"]})
  const abonosGerencia = await this.abonosGerenciaRepository.find(  {relations: ["dia"]})
  const abonosNomina = await this.abonosNominaRepository.find({relations:["usuario"]})
  const abonosInv = await this.abonosInvRepository.find({relations:["contratosInversionista", "contratosInversionista.cliente"]})


  const abonosLot =  abonos?.map( (item ) =>  ({ id:item.id, fhcreacion: item.fhcreacion, descuento : item.descuento , formadepago: item.formadepago , nombre: item.contrato.clientes.nombre}))
  const abonosinv =  abonosInv?.map( (item ) =>  ({ id:item.id, fhcreacion: item.fhcreacion, descuento : item.credito , formadepago: item.formadepago , nombre: item.contratosInversionista.cliente.nombre}))
  const abonosprov =  abonosProv?.map((item) => ({ id:item.id, fhcreacion: item.fhcreacion , descuento: item.credito, formadepago: item.formadepago, nombre:item.contratosProveedores.proveedores.nombre}))
  const abonosfracc =  abonosFracc?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion , descuento: item.penalizacion, formadepago: item.formadepago , nombre: item.contratosFracc.Fraccionamiento.nombre}))
  const abonosventas =  abonosVentas?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion , descuento: item.comision, formadepago: item.formadepago , nombre: item.vendedor.nombre}))
  const abonosgerencia =  abonosGerencia?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion , descuento: item.egreso, formadepago: item.formadepago , nombre: (item.dia.fhcreacion).toString()}))
  const abonosnomina =  abonosNomina?.map((item) => ({id:item.id ,fhcreacion:item.fhcreacion , descuento:item.adeudo, formadepago:item.formadepago , nombre : item.usuario.nombre}) )


  const ultimoAbonoFracc =  abonosfracc[abonosFracc?.length - 1] 
  const ultimoAbonoLot =  abonosLot[abonosLot?.length - 1] 
  const ultimoAbonoInv =  abonosinv[abonosinv?.length - 1] 
  const ultimoAbonoProv =  abonosProv[abonosProv?.length - 1] 
  const ultimoAbonoVenta =  abonosventas[abonosventas?.length - 1] 
  const ultimoAbonoGerencia =  abonosgerencia[abonosgerencia?.length - 1] 
  const ultimoAbonoNomina =  abonosnomina[abonosnomina?.length - 1]
  
  const allabonos =  abonosLot?.concat(abonosprov,abonosfracc,abonosventas,abonosgerencia,abonosnomina,abonosinv)
  
  const fechaActual = new Date();
  const mesActual = fechaActual?.getMonth() + 1;
  const objetosMes = allabonos?.filter(objeto => {
  const fecha = new Date(objeto?.fhcreacion);
  return fecha?.getMonth() + 1 === mesActual;
});
  
	return {data : objetosMes ,
    ulitmoAbonoVentas:ultimoAbonoVenta?.id || 0, 
    ultimoAbonoFracc: ultimoAbonoFracc?.id || 0, 
    ultimoAbonoLot:ultimoAbonoLot?.id || 0, 
    ultimoAbonoProv:ultimoAbonoProv?.id || 0,
    ultimoAbonoGerencia:ultimoAbonoGerencia?.id || 0 ,
    ultimoAbonoNomina: ultimoAbonoNomina?.id || 0,
    ultimoAbonoInv: ultimoAbonoInv?.id || 0,
    status: HttpStatus.OK }
}

async getAbonosDia(id:number) {
  const dia = await this.abonosGerenciaRepository.findOne({where:{id}})
  
  const fhcreacion = dia.fhcreacion
  const startOfDay = new Date(fhcreacion.setHours(0, 0, 0, 0));
  const endOfDay = new Date(fhcreacion.setHours(23, 59, 59, 999));
  
  const abonosLote = await this.abonoRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true, folio : true , montoingreso: true , descuento:true , estatus : true, fhcreacion:true ,formadepago:true ,}}) 
  const abonosFracc = await this.abonosFraccRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true, folio : true , montoingreso: true , penalizacion:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  const abonosProv = await this.abonosProvRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true ,folio : true , montoingreso: true , credito:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  
  const abonosVentas = await this.abonosVentasRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true ,folio : true , abono: true , comision:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  
  const abonoNomina = await this.abonosNominaRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true ,folio : true , nomina: true , adeudo:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  
  const abonoInv = await this.abonosInvRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true ,folio : true , pago: true , credito:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  
  const abonosGerencia = await this.abonosGerenciaRepository.find({where:{fhcreacion: Between(startOfDay, endOfDay) },
  select:{id: true ,folio : true , ingreso: true , egreso:true , estatus : true, fhcreacion:true ,formadepago:true, }}) 
  
  const abonosLot =  abonosLote?.map( (item ) =>  ({ id:item.id, fhcreacion: item.fhcreacion,ingreso:item.montoingreso, descuento : item.descuento , formadepago: item.formadepago ,folio: item.folio, estatus:item.estatus}))
  const abonosinv =  abonoInv?.map( (item ) =>  ({ id:item.id, fhcreacion: item.fhcreacion, ingreso:item.pago , descuento: item.credito , formadepago: item.formadepago ,folio: item.folio, estatus:item.estatus }))
  const abonosprov =  abonosProv?.map((item) => ({ id:item.id, fhcreacion: item.fhcreacion , ingreso : item.montoingreso, descuento: item.credito, formadepago: item.formadepago,folio: item.folio, estatus:item.estatus }))
  const abonosfracc =  abonosFracc?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion , ingreso: item.montoingreso, descuento: item.penalizacion, formadepago: item.formadepago , folio: item.folio, estatus:item.estatus}))
  const abonosventas =  abonosVentas?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion , ingreso:item.abono , descuento: item.comision, formadepago: item.formadepago , folio: item.folio, estatus:item.estatus}))
  const abonosgerencia =  abonosGerencia?.map((item) => ({ id:item.id,  fhcreacion: item.fhcreacion ,ingreso:item.ingreso, descuento: item.egreso, formadepago: item.formadepago , folio: item.folio, estatus:item.estatus}))
  const abonosnomina =  abonoNomina?.map((item) => ({ id:item.id ,fhcreacion:item.fhcreacion ,ingreso:item.nomina, descuento:item.adeudo, formadepago:item.formadepago , folio: item.folio, estatus:item.estatus}) )

  const allabonos =  abonosLot?.concat(abonosinv,abonosprov,abonosfracc,abonosventas,abonosgerencia,abonosnomina)

  const totalIngreso = allabonos.reduce((total, item ) => total + item.ingreso , 0 )
  const totalEgresos = allabonos.reduce((total, item ) => total + item.descuento , 0 )



  return { allabonos , totalIngreso, totalEgresos, status:HttpStatus.OK }
}




async getAbonosByUsuario(id:number) {
  const foundUsuario = await this.usuarioRepository.findOne( {where: {id}} ) 
	const abonos = await this.abonoRepository.find({ 
    where: { usuarioId : foundUsuario.id }
  })
  
  
	return {data : abonos, status: HttpStatus.OK }
}
async getAbonosByEstadoCuenta(id:number) {
  const found = await this.estadoCuentaContratoRepository.findOne( {where: {id}} ) 
	const abonos = await this.abonoRepository.find({ 
    where: { contratoId : found.id }
    
  })
  
  
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonobyId(id: number) {
    const AbonoFound = await this.abonoRepository.findOne({
      where: { id } , relations: ["contrato" ,"contrato.clientes"]
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

  //Contratos Clientes ------------------------------------------------------------------------------------------------------------------------------
async createAbonoContrato(abono: CreatAbonoDto , id:number){
      const contrato = await this.contratoRepository.findOne({where : {id}})   
      const newAbonoFlag = await { ...abono, fhcreacion: new Date()}
      
      const saldo = (contrato.montototal - (newAbonoFlag.montoingreso +  contrato.pagado) )
      
      const newAbono = await this.abonoRepository.create({...newAbonoFlag , saldo: saldo, contratoId:contrato.id })
      const AbonoSaved = await this.abonoRepository.save({...newAbono })
      await this.createIngresoAbono({...newAbono})
      await this.createEgresoAbono({...newAbono})
      await this.getTotalMontoContrato(AbonoSaved.contratoId)
      return[{ data:AbonoSaved,  status : HttpStatus.OK}]

  }
	async createIngresoAbono(ingresoabono){
		const newFlag:CreateIngresosContratosDto = {
      ...ingresoabono , 
      estadocuentacontratoId:ingresoabono.contratoId , 
      contratoId:ingresoabono.contratoId , 
      concepto:`Abono ${ingresoabono.concepto}`, 
      fhcreacion: new Date()
		}
		const newItem = await this.ingresoContratosRepository.create({...newFlag})
		const Saved = await this.ingresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}
	async createEgresoAbono(egresoabono){
		const newFlag:CreateEgresosContratosDto = {
      ...egresoabono ,
      montoegreso:egresoabono.descuento,
      estadocuentacontratoId:egresoabono.contratoId , 
      contratoId:egresoabono.contratoId , 
      concepto:`Descuento ${egresoabono.concepto}`, 
      fhcreacion: new Date()
		}
		const newItem = await this.egresoContratosRepository.create({...newFlag})
		const Saved = await this.egresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
  
	}
   async getTotalMontoContrato (id:number) {
    const found = await this.contratoRepository.findOne({where :{id}})
    const abonos = await this.abonoRepository.find({ 
    where: {contratoId: found.id}
      })

      const abonosActivos = abonos.filter(item => item.estatus)
      
      	const monto = abonosActivos.reduce((monto, item) => monto + item.montoingreso,0 )
		    found.pagado = (monto + found.enganche)
 
    return this.contratoRepository.save(found) 
  }  

async deleteAbonoContrato(id:number){
  const item = await this.abonoRepository.findOne({where:{id}})
  
  const newFlag = {
    ...item ,
    estatus:false
  }

  await this.abonoRepository.save(newFlag)
/*   await this.getTotalMontoContrato(abono.affected)

 */ return{  data : newFlag , status : HttpStatus.OK}
}
// Abonos Fraccs ------------------------------------------------------------------------------------------------------------------------------


async createAbonoFracc(abono: createAbonoFraccDto , id:number){
      const contratoFracc = await this.contratosFraccRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono,contratosFraccId:contratoFracc.id, fhcreacion: new Date()}
      
        const saldo =  (contratoFracc.montototal - (newAbonoFlag.montoingreso +  contratoFracc.pagado - (newAbonoFlag.penalizacion)) )
        const newAbono = await this.abonosFraccRepository.create({...newAbonoFlag , saldo:saldo})
        const AbonoSaved = await this.abonosFraccRepository.save({...newAbono })
      await this.getTotalMontoContratoFracc(newAbonoFlag.contratosFraccId)
        return[{ data:AbonoSaved,  status : HttpStatus.OK}]
   
  }

async getTotalMontoContratoFracc (id:number) {
    const found = await this.contratosFraccRepository.findOne({where :{id}})
    const abonos = await this.abonosFraccRepository.find({ 
    where: {contratosFraccId: found.id}
      })
      const abonosActivos = abonos.filter(item=> item.estatus)
    const totalMontos = abonosActivos.reduce((total,monto) => total + monto.montoingreso , 0 )
     found.pagado = (totalMontos + found.enganche)
    found.penalizaciones = abonosActivos.reduce((total, monto) => total + monto.penalizacion ,0)
    return this.contratosFraccRepository.save(found) 
  } 
async getTotalPenalContratoFracc (id:number) {
    const found = await this.contratosFraccRepository.findOne({where :{id}})
    const abonos = await this.abonosFraccRepository.find({ 
    where: {contratosFraccId: found.id}
      })
    const totalMontos = abonos.reduce((total,monto) => total + monto.penalizacion , 0 )
     const pagado =   found.penalizaciones + totalMontos 
      found.penalizaciones = pagado 

    return this.contratosFraccRepository.save(found) 
  } 

  async deleteAbonoContratoFracc(id:number){
    const item = await this.abonosFraccRepository.findOne({where:{id}})

    const newFlag = {
      ...item,
      estatus:false
    }

    await this.abonosFraccRepository.save(newFlag)

  
  return{ data : newFlag , status : HttpStatus.OK}
}

async getAbonosFracc() {
    const AbonoFound = await this.abonosProvRepository.find({ relations: ["contratosProveedores" ,"contratosProveedores.proveedores"]
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

async getAbonoFraccbyId(id: number) {
    const AbonoFound = await this.abonosFraccRepository.findOne({
      where: { id } , relations: ["contratosFracc" ,"contratosFracc.Fraccionamiento"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }

// Abonos Proveedores ------------------------------------------------------------------------------------------------------------------------------

async createAbonoProv(abono: createAbonoProvDto , id:number){
      const contratoProv = await this.contratosProvRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono, fhcreacion: new Date()}
      
        const saldo = (contratoProv.credito - (newAbonoFlag.montoingreso +  contratoProv.pagado - newAbonoFlag.credito) )
        const newAbono = await this.abonosProvRepository.create({...newAbonoFlag , saldo:saldo, contratosProveedoresId:contratoProv.id })
        const AbonoSaved = await this.abonosProvRepository.save({...newAbono })
        await this.getTotalMontoContratoProv(AbonoSaved.contratosProveedoresId)
        await this.getAbonosMes()
        return[{ data:AbonoSaved,  status : HttpStatus.OK}]
   
  }

async getTotalMontoContratoProv (id:number) {
    const found = await this.contratosProvRepository.findOne({where :{id}})
    const abonos = await this.abonosProvRepository.find({ 
    where: {contratosProveedoresId: found.id}
      })
   
      const abonosActivos = abonos.filter(item => item.estatus)

    const totalMontos = abonosActivos.reduce((total,monto) => total + monto.montoingreso , 0 )
    found.pagado = (totalMontos+found.enganche) 
    const credito  = abonos.reduce((total, monto) => total + monto.credito ,0)
     found.credito =  credito + found.montototal 
    return this.contratosProvRepository.save(found) 
  } 
 async deleteAbonoContratoProv(id:number){
  const item = await this.abonosProvRepository.findOne({where:{id}})

  const newFlag = { 
    ...item,
    estatus: false
  }
  
  await this.abonosProvRepository.save(newFlag)  
  return{ data: newFlag , status : HttpStatus.OK}
}

async getAbonosProv() {
    const AbonoFound = await this.abonosProvRepository.find({ relations: ["contratosProveedores" ,"contratosProveedores.proveedores"]
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

async getAbonoProvbyId(id: number) {
    const AbonoFound = await this.abonosProvRepository.findOne({
      where: { id } , relations: ["contratosProveedores" ,"contratosProveedores.proveedores"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }
 //Abonos Ventas ---------------------------------------------------------------------------------------------------------------------------------v 
  async createAbonoVentas(abono: CreateAbonoVentasDto , id:number){
      const vendedor = await this.vendedoresRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono, fhcreacion: new Date()}
        await this.getTotalMontoComisiones(vendedor.id)
        const saldo = (vendedor.comisiones - (newAbonoFlag.abono + vendedor.pagado - newAbonoFlag.comision) )
        const newAbono = await this.abonosVentasRepository.create({...newAbonoFlag , saldo:saldo, vendedorId:vendedor.id })
        const AbonoSaved = await this.abonosVentasRepository.save({...newAbono })
        await this.getTotalMontoComisiones(vendedor.id)
        return[{ data:AbonoSaved,  status : HttpStatus.OK}]
   
  }
 async getTotalMontoComisiones (id:number) {
    const found = await this.vendedoresRepository.findOne({where :{id}})
    const abonos = await this.abonosVentasRepository.find({ 
    where: { vendedorId: found.id}
      })
      const abonosActivos = abonos.filter(item=> item.estatus)
    const totalMontos = abonosActivos.reduce((total,monto) => total + monto.abono , 0 )
    found.pagado = (totalMontos) 
    const comisiones  = abonosActivos.reduce((total, monto) => total + monto.comision ,0)
     found.comisiones =  comisiones 
    return this.vendedoresRepository.save(found) 
  } 


  async getAbonoVentaById(id: number) {
    const AbonoFound = await this.abonosVentasRepository.findOne({
      where: { id } , relations: ["vendedor"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }

  async deleteAbonoVentas(id:number){
    const item = await this.abonosVentasRepository.findOne({where:{id}})
  
    const newFlag = {
      ...item , 
      estatus : false 
    }

  await this.abonosVentasRepository.save(newFlag)
  
  return{  data : newFlag , status : HttpStatus.OK}
}
 //Abonos Gerencia ---------------------------------------------------------------------------------------------------------------------------------v 
 async createAbonoGerencia(abono: createAbonoGerenciaDto , id:number){
      const dia = await this.diasRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono, fhcreacion: new Date()}
       
        const saldo = (dia.montoinicio + newAbonoFlag.ingreso + dia.ingresototal - newAbonoFlag.egreso - dia.egresototal )
        const newAbono = await this.abonosGerenciaRepository.create({...newAbonoFlag , saldo:saldo, diaId:dia.id })
        const AbonoSaved = await this.abonosGerenciaRepository.save({...newAbono })
        await this.getTotalMontoIngresosDia(dia.id)
        return[{ data:AbonoSaved,  status : HttpStatus.OK}]
   
  }

async getTotalMontoIngresosDia (id:number) {
    const found = await this.diasRepository.findOne({where :{id}})
    const abonos = await this.abonosGerenciaRepository.find({ 
    where: { diaId: found.id}
      })
    const abonosActivos = abonos.filter(item=> item.estatus)
    const ingresos = abonosActivos.reduce((total,monto) => total + monto.ingreso , 0 )
    found.ingresototal = (ingresos) 
    const egresos  = abonosActivos.reduce((total, monto) => total + monto.egreso ,0)
     found.egresototal =  egresos 
    return this.diasRepository.save(found) 
  } 

async getAbonoGerenciaById(id: number) {
    const AbonoFound = await this.abonosGerenciaRepository.findOne({
      where: { id } , relations: ["gerencia"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }


  async deleteAbonoGerencia(id:number){
    const item = await this.abonosGerenciaRepository.findOne({where:{id}})

    const newFlag = {
      ...item,
      estatus:false
    }


  await this.abonosGerenciaRepository.save(newFlag)
  
  return{ data: newFlag ,status : HttpStatus.OK}
}
 //Abono Nomina-----------------------------------------------------------------------------------------------------------------------------------------v 

  async createAbonoNomina(abono: createAbonoNominaDto , id:number){
      const usuario = await this.usuarioRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono, fhcreacion: new Date()}
       
        const saldo = (usuario.adeudo - (newAbonoFlag.nomina + usuario.pagado - newAbonoFlag.adeudo)  )
        const newAbono = await this.abonosNominaRepository.create({...newAbonoFlag , saldo:saldo, usuarioId:usuario.id })
        const AbonoSaved = await this.abonosNominaRepository.save({...newAbono })
        await this.getTotalMontoNomina(usuario.id)
        return[{ data:AbonoSaved,  status : HttpStatus.OK}]
   
  }

  async getTotalMontoNomina(id :number) {
   
    const found = await this.usuarioRepository.findOne({where :{id}})
    const abonos = await this.abonosNominaRepository.find({ 
    where: { usuarioId: found.id}
      })
   const abonosActivos = abonos.filter(item => item.estatus )
    const ingresos = abonosActivos.reduce((total,monto) => total + monto.nomina , 0 )
    found.pagado = (ingresos) 
    const egresos  = abonosActivos.reduce((total, monto) => total + monto.adeudo ,0)
     found.adeudo =  egresos 
    return this.usuarioRepository.save(found) 
  

  }
  
  async getAbonoNominaById(id: number) {
    const AbonoFound = await this.abonosNominaRepository.findOne({
      where: { id } , relations: ["usuario"]
    });
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }

    async deleteAbonoNomina(id:number){
  const item = await this.abonosNominaRepository.findOne({where:{id}})

  const newFlag = {
    ...item,
    estatus: false
  }

  await this.abonosNominaRepository.save(newFlag)

/*   await this.getTotalMontoContrato(abono.affected)
 */ return{ data: newFlag , status : HttpStatus.OK}
}

 //--------------------------------------------------------------------------------------------------------------------------------------------v 

async editAbono ( id:number, contratoId:number, abono: UpdateAbonoDto){
    const abonoFlag = {...abono, contratoId:contratoId }
    const updatedAbono = await this.abonoRepository.update(
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

 
  async getAbonoMesId(id: number) {
    const AbonosFound = await this.getAbonosMes()
    const AbonoFound = AbonosFound.data.filter((abono) => abono.id === id   )
    
    if (!AbonoFound) {
      throw new BadRequestException({
        data: null,
        message: 'Abono not found',
        status: HttpStatus.NOT_FOUND,
      });
    }
    return AbonoFound
  }

}


