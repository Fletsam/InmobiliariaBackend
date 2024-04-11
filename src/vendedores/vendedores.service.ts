import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vendedores } from "./vendedores.entity";
import { Repository } from "typeorm";
import { CreateVendedoresDto } from "./dto/vendedores.dto";
import { AbonosVentas } from "src/abonos/abonoventas/abonoventas.entity";

@Injectable()
export class VendedoresService {
constructor(
	@InjectRepository(Vendedores) private vendedoresRepository: Repository<Vendedores>,
	@InjectRepository(AbonosVentas) private abonosVentasRepository: Repository<AbonosVentas>,
    ) {}


	async getVendedores(){
		const items = await this.vendedoresRepository.find()
		return { data: items , status : HttpStatus.OK}
	}
	async getVendedoresbyId(id:number){
		const item = await this.vendedoresRepository.findOne({where:{id}, relations:["AbonosVentas"]})
		
		const comisiones = item.AbonosVentas.reduce((total,item)=> total + item.comision,0) 
			item.comisiones = comisiones
		const pagado = item.AbonosVentas.reduce((total,item)=> total + item.abono,0) 
			item.pagado = pagado

		const newFlag = {...item}
		const Flag = await this.vendedoresRepository.create(newFlag)
		await this.vendedoresRepository.save(Flag)
	

		return { vendedor:item , status : HttpStatus.OK}
	}

	async createVendedor(vendedor: CreateVendedoresDto ){
	const newFlag = { ...vendedor, fhcreacion: new Date(), fhmodificacion: new Date()  }
	const newItem = await this.vendedoresRepository.create({...newFlag})
	const Saved = await this.vendedoresRepository.save({...newItem})

	return{ data:Saved, status : HttpStatus.OK}
  }
}