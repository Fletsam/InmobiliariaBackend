import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
       type: 'mysql',
        username: 'root',
        password: '1234',
        host: 'localhost',
        port: 3306,
        database: 'inmobiliaria',
        
      entities: ['/.src/**/*.entity.ts'],
      synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
