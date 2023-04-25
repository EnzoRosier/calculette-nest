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

  //Cree un success dans la DB
  async createSuccess(id: number, timeTakenMs: number): Promise<Success> {
    const success = new Success();
    success.id = id;
    success.timeTakenMs = timeTakenMs;
    await success.save();
    success.save();
    return success;
  }

  //renvoie un rapport sur les success de la DB
  async getReport(time: number) {
    const res = await this.successRepository.find();
    let moy = 0;
    let pourc = 0;
    res.forEach((val) => {
      moy = moy + val.timeTakenMs; //Moyenne du temps
      if (val.timeTakenMs < time) {
        pourc = pourc + 1; //Pourcentage des gents moins rapide
      }
    });
    return [moy / res.length, (pourc * 100) / res.length];
  }
}
