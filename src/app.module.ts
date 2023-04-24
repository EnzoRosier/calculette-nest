import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccessController } from './success/success.controller';
import { SuccessService } from './success/success.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SuccessModule],
  controllers: [AppController, SuccessController],
  providers: [AppService, SuccessService],
})
export class AppModule {}
