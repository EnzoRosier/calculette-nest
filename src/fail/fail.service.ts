import { Injectable } from '@nestjs/common';
import { Fail } from './fail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FailService {
  constructor(
    @InjectRepository(Fail)
    private failRepository: Repository<Fail>,
  ) {}

  //Cree un fail dans la DB
  async createFail(): Promise<Fail> {
    const fail = new Fail();
    console.log(fail);
    await fail.save();
    return fail;
  }

  //Renvoie tout les fails de la DB
  async getAll() {
    const res = await this.failRepository.find();
    console.log('res is :', res);
    return res;
  }

  //Renvoie un rapport sur les erreurs
  async getReport() {
    const res = await this.failRepository.find();
    console.log('res is :', res[res.length - 1]);
    return [res[res.length - 1], res.length + 1];
  }
}
