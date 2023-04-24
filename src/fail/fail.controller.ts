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
  createFail(): Promise<Fail> {
    const res = this.failService.getLastRecent();
    this.failService.createFail();
    return res;
  }

  @Get()
  getAllfail() {
    console.log('On cherche tout les fails');
    return this.failService.getAll();
  }

  @Get(':last')
  getLastRecentFails() {
    console.log('On cherche le dernier fail');
    return this.failService.getLastRecent();
  }
}
