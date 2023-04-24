import { Injectable } from '@nestjs/common';
import { Success } from './success.entity';
import { time } from 'console';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuccessService {
  constructor(
    @InjectRepository(Success)
    private successRepository: Repository<Success>,
  ) {}

  async createSuccess(id: number, timeTakenMs: number): Promise<Success> {
    const success = new Success();
    success.id = id;
    success.timeTakenMs = timeTakenMs;
    await success.save();
    success.save();
    return success;
  }

  async getAll() {
    const res = await this.successRepository.find();
    console.log('res is :', res);
    return res;
  }
}
