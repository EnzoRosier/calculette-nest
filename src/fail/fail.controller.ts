import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  Header,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FailService } from './fail.service';
import { Fail } from './fail.entity';

@Controller('fail')
export class FailController {
  constructor(private failService: FailService) {}

  @Post()
  createFail(
    @Body('id') id: number,
    @Body('timeTakenMs') created_at: Date,
  ): Promise<Fail> {
    return this.failService.createSuccess(id, created_at);
  }

  @Get()
  getAllfail() {
    console.log('On cherche tout les fails');
    return this.failService.getAll();
  }

  @Get(':last')
  getLastFail() {
    console.log('On cherche le dernier fail');
    return this.failService.getLast();
  }
}
