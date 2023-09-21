import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'demo-nest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
