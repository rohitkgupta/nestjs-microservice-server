import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";
import {Logger} from "@nestjs/common";

const logger = new Logger('Main');


const options = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, options);
  await app.listen(() => logger.log('Application started.'));
}

bootstrap();
