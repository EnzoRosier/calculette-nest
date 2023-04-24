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

  async getReport(time: number) {
    const res = await this.successRepository.find();
    let moy = 0;
    let pourc = 0;
    res.forEach((val) => {
      moy = moy + val.timeTakenMs;
      if (val.timeTakenMs < time) {
        pourc = pourc + 1;
        console.log(pourc);
      }
    });
    return [moy / res.length, (pourc * 100) / res.length];
  }
}
