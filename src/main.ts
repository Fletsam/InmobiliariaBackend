import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ["http://localhost:3000", "https://tlzs5t31-3000.usw3.devtunnels.ms", "http://192.168.1.193:3000", "http://192.168.1.68:3000"],
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  });

  app.setGlobalPrefix('/api');
  await app.listen(3302, '0.0.0.0');
}

bootstrap();
