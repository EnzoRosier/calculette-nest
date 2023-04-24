import { Module } from '@nestjs/common';
import { FailController } from './fail.controller';
import { FailService } from './fail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fail } from './fail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fail])],
  controllers: [FailController],
  providers: [FailService],
  exports: [TypeOrmModule],
})
export class FailModule {}
