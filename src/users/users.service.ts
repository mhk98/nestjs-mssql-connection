import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usertbl } from './usertbl.entity';


  


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(usertbl)
    private UsertblRepository: Repository<usertbl>,
  ) {}

  findAll(): Promise<usertbl[]> {
    return this.UsertblRepository.find();
  }

  findOne(User_ID: string): Promise<usertbl> {
    return this.UsertblRepository.findOneBy({ User_ID });
  }

createusertbl(Usertbl: usertbl ): Promise<usertbl> {
    return this.UsertblRepository.save(Usertbl);
}
}

