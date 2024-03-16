import { BadRequestException, Controller, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { Repository } from "typeorm";
import { CreatAbonoDto } from "./dto/abono.dto";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Contratos } from "src/Contrato/contratos/contratos.entity";
import { IngresosContratos } from "src/Ingresoss/ingresoscontratos/ingresoscontratos.entity";
import { CreateIngresosContratosDto } from "src/Ingresoss/ingresoscontratos/dto/ingresoscontratos.dto";

@Injectable()

export class AbonoService {

	constructor(
		@InjectRepository(Abono) private abonoRepository: Repository<Abono> , 
    @InjectRepository(Contratos) private contratoRepository: Repository<Contratos>, 
    @InjectRepository(Usuarios) private usuarioRepository: Repository<Usuarios>,
    @InjectRepository(IngresosContratos) private ingresoContratosRepository: Repository<IngresosContratos>,
    ) {}
   
    

async getAbonos() {
	const abonos = await this.abonoRepository.find()
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonosByUsuario(id:number) {
  const foundUsuario = await this.usuarioRepository.findOne( {where: {id}} ) 
	const abonos = await this.abonoRepository.find({ 
    where: { usuarioId : foundUsuario.id }
  })
  
  
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonobyId(id: number) {
    const AbonoFound = await this.abonoRepository.findOne({
      where: { id },
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

  async createAbonoContrato(abono: CreatAbonoDto , id:number){
      const contrato = await this.contratoRepository.findOne({where : {id}})
      const newAbonoFlag = { ...abono , fhcreacion: new Date()}
      const newAbono = await this.abonoRepository.create({...newAbonoFlag , contratoId:contrato.id })
      const AbonoSaved = await this.abonoRepository.save({...newAbono })
      await this.createIngresoAbono({...newAbono})
      await this.getTotalMontoContrato(AbonoSaved.contratoId)
      return[{ data:AbonoSaved,  status : HttpStatus.OK}]

  }

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

  async getTotalMontoContrato (id:number) {
    const found = await this.contratoRepository.findOne({where :{id}})
    const abonos = await this.abonoRepository.find({ 
    where: {contratoId: found.id}
      })
    const totalMontos = abonos.reduce((total,monto) => total + monto.montoingreso , 0 )
      found.pagado = totalMontos 
      
    return this.contratoRepository.save(found) 
  }

	async createIngresoAbono(ingresoabono){
		const newFlag:CreateIngresosContratosDto = {
      ...ingresoabono , 
      estadocuentacontratoId:ingresoabono.contratoId , 
      contratoId:ingresoabono.contratoId , 
      concepto:"Abono" , 
      fhcreacion: new Date()
		}
		const newItem = await this.ingresoContratosRepository.create({...newFlag})
		const Saved = await this.ingresoContratosRepository.save({...newItem})
		return{ data:Saved, status : HttpStatus.OK}
	}
}

