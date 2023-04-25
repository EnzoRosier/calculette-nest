import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  Header,
  Headers,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FailService } from './fail.service';
import { Fail } from './fail.entity';

@Controller('fail')
export class FailController {
  constructor(private failService: FailService) {}

  //Requête qui crée une erreur dans la DB (et renvoie un rapport)
  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, Authorization',
  )
  @Header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  createFail(): Promise<(Fail | number)[]> {
    const res = this.failService.getReport();
    this.failService.createFail();
    return res;
  }

  //Requête qui renvoie toutes les erreurs
  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  @Header(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, Authorization',
  )
  @Header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  getAllfail() {
    console.log('On cherche tout les fails');
    return this.failService.getAll();
  }

  //Requête qui renvoie un rapport sur les erreurs
  @Get(':last')
  @Header('Access-Control-Allow-Origin', '*')
  @Header(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, Authorization',
  )
  @Header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  getReportFail() {
    console.log('On cherche le dernier fail');
    return this.failService.getReport();
  }
}
