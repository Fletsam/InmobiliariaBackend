import { BadRequestException, Controller, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Abono } from "./abono.entity";
import { Repository } from "typeorm";
import { CreatAbonoDto } from "./dto/abono.dto";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { UpdateAbonoDto } from "./dto/abonoUpdate.dto";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { RfcsService } from "src/rfcs/rfcs.service";
import { Rfcs } from "src/rfcs/rfcs.entity";

@Injectable()

export class AbonoService {

	constructor(
		@InjectRepository(Abono) private abonoRepository: Repository<Abono> , private usuarioService: UsuariosService, private rfcService : RfcsService, @InjectRepository(Rfcs) private rfcRepository: Repository<Rfcs>	) {}
    
	async getAbonos() {
	const abonos = await this.abonoRepository.find()
  
  
	return {data : abonos, status: HttpStatus.OK }
}


async getAbonosByUsuario(id:number) {
 
  const foundUsuario = await this.usuarioService.findById(id) 
	const abonos = await this.abonoRepository.find({ 
    where: {usuarioId: foundUsuario.id}
  })
  
  
	return {data : abonos, status: HttpStatus.OK }
}

async getAbonosByRfc(id:number) {
 
  const foundRfc = await this.rfcService.getRfcById(id) 
	const abonos = await this.abonoRepository.find({ 
    where: {rfcId: foundRfc.id}
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

  async createAbono(abono: CreatAbonoDto , id:number){
      
      const newAbonoFlag = { ...abono , fhcreacion: new Date()}

      const newAbono = await this.abonoRepository.create({...newAbonoFlag , usuarioId:id})
      

      const AbonoSaved = await this.abonoRepository.save({...newAbono , idcreacion:id})

      await this.getTotalMonto(AbonoSaved.rfcId)
      return[{ data:AbonoSaved,  status : HttpStatus.OK}]

  }

  async editAbono (id:number , usuarioId : number, abono: UpdateAbonoDto){
   
    const abonoFlag = {...abono, usuarioId:usuarioId }
  
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
    await this.getTotalMonto(abono.rfcid)
    return { data:abonoFlag , status: HttpStatus.OK}
  }


   async getTotalMonto (id:number) {
   /*  const abonos = await this.abonoRepository.find() */
     const foundRfc = await this.rfcService.getRfcById(id) 
      const abonos = await this.abonoRepository.find({ 
    where: {rfcId: foundRfc.id}
  })
    const totalMontos = abonos.reduce((total,monto) => total + monto.monto , 0 )
      foundRfc.total = totalMontos 
      
   return this.rfcRepository.save(foundRfc) 
    
  }
}

