import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Exame } from './entities/exame.entity';

@Injectable()
export class ExamesService extends GenericService<Exame> {
  constructor(@InjectRepository(Exame) repository: Repository<Exame>) {
    super(repository);
  }
}
