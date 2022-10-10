import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import port from "./config/configuration"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(`server is runiinng on ${port}`);
  await app.listen(2049);
}
bootstrap();
