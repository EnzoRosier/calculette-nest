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

  async createSuccess(id: number, created_at: Date): Promise<Fail> {
    const fail = new Fail();
    fail.id = id;
    fail.created_at = created_at;
    console.log(fail);
    await fail.save();
    fail.save();
    return fail;
  }

  async getAll() {
    const res = await this.failRepository.find();
    console.log('res is :', res);
    return res;
  }

  async getLast() {
    const res = await this.failRepository.find({
      take: 1,
      order: {
        id: 'DESC',
      },
    });
    console.log('res is :', res);
    return res;
  }
}
