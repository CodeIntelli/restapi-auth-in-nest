import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

@Module({
  imports: [
    // 1
    MongooseModule.forRoot('mongodb://localhost:27017/Restapis',),
    // ConfigModule.forRoot({
    //   // envFilePath: ['.development.env', '.env.development.local', '.env.development']
    //   load: [configuration],
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
