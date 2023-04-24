import { Module } from '@nestjs/common';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Success } from './success.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Success])],
  controllers: [SuccessController],
  providers: [SuccessService],
  exports: [TypeOrmModule],
})
export class SuccessModule {}
