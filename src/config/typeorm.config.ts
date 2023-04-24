import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Success } from 'src/success/success.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'junia_user',
  password: 'junia_user',
  database: 'calculette',
  entities: [Success],
};
