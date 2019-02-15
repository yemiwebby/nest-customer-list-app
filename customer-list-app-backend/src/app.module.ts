import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://demo:demo1234@ds127825.mlab.com:27825/customer-app', { useNewUrlParser: true }),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
