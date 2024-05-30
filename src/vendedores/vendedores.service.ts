import { BadRequestException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vendedores } from "./vendedores.entity";
import { Repository } from "typeorm";
import { CreateVendedoresDto } from "./dto/vendedores.dto";
import { AbonosVentas } from "src/abonos/abonoventas/abonoventas.entity";
import { Llamadas } from "./llamadas/llamadas.entity";
import { createLlamadasDto } from "./llamadas/dto/llamadas.dto";

@Injectable()
export class VendedoresService {
constructor(
	@InjectRepository(Vendedores) private vendedoresRepository: Repository<Vendedores>,
	@InjectRepository(AbonosVentas) private abonosVentasRepository: Repository<AbonosVentas>,
	@InjectRepository(Llamadas) private llamadasRepository: Repository<Llamadas>,
    ) {}


	async getVendedores(){
		const items = await this.vendedoresRepository.find()
		return { data: items , status : HttpStatus.OK}
	}
	async getVendedoresbyId(id:number){
		const item = await this.vendedoresRepository.findOne({where:{id}, relations:["AbonosVentas"]})
		
		
		if (!item) {
			throw new BadRequestException({
				data: null,
				message: 'Usuario no encontrado',
				status: HttpStatus.NOT_FOUND,
			});
    }	

		const abonosActivos = item.AbonosVentas?.filter(item=> item.estatus)
		
		const comisiones = abonosActivos.reduce((total,item)=> total + item.comision,0) 
			item.comisiones = comisiones
		const pagado = abonosActivos.reduce((total,item)=> total + item.abono,0) 
			item.pagado = pagado

		const newFlag = {...item}
		const Flag = await this.vendedoresRepository.create(newFlag)
		await this.vendedoresRepository.save(Flag)
	

		return { vendedor:item, abonosActivos , status : HttpStatus.OK}
	}

	async createVendedor(vendedor: CreateVendedoresDto ){
	const newFlag = { ...vendedor, fhcreacion: new Date(), fhmodificacion: new Date()  }
	const newItem = await this.vendedoresRepository.create({...newFlag})
	const Saved = await this.vendedoresRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }

  async createLlamada (llamada:createLlamadasDto){
	const newFlag = {...llamada , fhcreacion : new Date()}

	const newItem = await this.llamadasRepository.create({...newFlag})

	const Saved = await this.vendedoresRepository.save({...newItem})

	return { data: Saved , status : HttpStatus.OK}


  }
}