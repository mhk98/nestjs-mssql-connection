import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usertbl } from './users/usertbl.entity';
import { UsersModule } from './users/users.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '192.168.0.111',
    port: 3306,
    username: 'pmt',
    password: 'pmt@1234',
    database: 'pmt_mohsin',
    entities: [usertbl],
    synchronize: true,
   
   }),
   UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
