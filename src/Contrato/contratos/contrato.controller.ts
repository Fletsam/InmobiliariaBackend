import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { ContratoService } from "./contrato.service";
import { CreateContratoDto } from "./dto/contratos.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateContratoFracc } from "../contratosFracc/dto/contratosfracc.dto";
import { ContratosInversionista } from "../contratosInversionista/contratoinversionista.entity";
import { CreateContratoInversionistaDto } from "../contratosInversionista/dto/contratoinversionista.dto";
import { createContratoProveedorDto } from "../contratosProveedores/dto/contratosproveedores.dto";


@Controller('contratos')
@UseGuards(AuthGuard)
export class ContratoController {
	
	constructor(private ContratoService : ContratoService) {}

	@Get('')
	getContratosLote(){
		return this.ContratoService.getContratosLote()

	}
	@Get('/all')
	getAllContratosAll(){
		return this.ContratoService.getAllContratos()

	}
	@Get('/fracc/:id')
	getContratosFraccById(
		@Param('id',ParseIntPipe) id:number,
	){
		return this.ContratoService.getContratoByIdFracc(id)

	}
	@Get('/fracc')
	getContratosFracc(
	){
		return this.ContratoService.getContratosFracc()

	}
	@Get('/prov/:id')
	getContratoProv(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratosProvbyId(id)	
	}
	@Get('/prov')
	getContratosProv()
	{
		return this.ContratoService.getContratosProv()	
	}
	@Get('/inv/:id')
	getContratoInv(
		@Param('id',ParseIntPipe) id:number,
	){
		return this.ContratoService.getContratoByIdInv(id)

	}
	@Get('/inv')
	getContratosInv(){
		return this.ContratoService.getContratosInv()

	}

	@Get(':id')
	getContratoLote(
		@Param('id',ParseIntPipe) id:number,
	)
	{
		return this.ContratoService.getContratoById(id)	
	}

	

	@Post('/lote/:id')
	createContratoLote(
		@Body() contrato:CreateContratoDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContrato(contrato, id)
		}
	} 
	@Post('/fraccionamiento/:id')
	createContratoFracc(
		@Body() contratofracc:CreateContratoFracc ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContratoFracc(contratofracc, id)
		}
	} 
	@Post('/inversionista/:id')
	createContratoInv(
		@Body() ContratosInversionista:CreateContratoInversionistaDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContratoInversionista(ContratosInversionista, id)
		}
	} 

	@Post('/proveedor/:id')
	createContratoProv(
		@Body() contratosProveedor:createContratoProveedorDto ,
		@Param('id',ParseIntPipe) id:number,
	) {
		{
			return this.ContratoService.createContratoProveedor(contratosProveedor, id)
		}
	} 
}