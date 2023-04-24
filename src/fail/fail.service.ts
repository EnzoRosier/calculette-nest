import { Injectable } from '@nestjs/common';
import { Fail } from './fail.entity';
import { time } from 'console';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FailService {
  constructor(
    @InjectRepository(Fail)
    private failRepository: Repository<Fail>,
  ) {}

  async createFail(): Promise<Fail> {
    const fail = new Fail();
    console.log(fail);
    await fail.save();
    return fail;
  }

  async getAll() {
    const res = await this.failRepository.find();
    console.log('res is :', res);
    return res;
  }

  async getLastRecent() {
    const res = await this.failRepository.find({
      take: 1,
      order: {
        id: 'DESC',
      },
    });
    console.log('res is :', res[0]);
    return res[0];
  }
}
