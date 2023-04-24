import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccessController } from './success/success.controller';
import { SuccessService } from './success/success.service';
import { FailModule } from './fail/fail.module';
import { FailController } from './fail/fail.controller';
import { FailService } from './fail/fail.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SuccessModule, FailModule],
  controllers: [AppController, SuccessController, FailController],
  providers: [AppService, SuccessService, FailService],
})
export class AppModule {}
