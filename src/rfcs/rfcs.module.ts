import { TypeOrmModule } from "@nestjs/typeorm";
import { Rfcs } from "./rfcs.entity";
import { RfcsService } from "./rfcs.service";
import { RfcsController } from "./rfcs.controller";
import { Module } from "@nestjs/common";

@Module({

	imports: [ TypeOrmModule.forFeature([Rfcs]),],
	controllers: [ RfcsController],
	providers: [ RfcsService],
	exports:[RfcsService]

})

export class RfcsModule {}