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
import { SuccessService } from './success.service';
import { Success } from './success.entity';

@Controller('success')
export class SuccessController {
  constructor(private successService: SuccessService) {}

  @Post()
  createSuccess(
    @Body('id') id: number,
    @Body('timeTakenMs') timeTakenMs: number,
  ): Promise<number[]> {
    console.log(timeTakenMs);
    this.successService.createSuccess(id, timeTakenMs);
    const res = this.successService.getReport(timeTakenMs);
    return res;
  }
}
