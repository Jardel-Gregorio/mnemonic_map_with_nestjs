import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Codigo } from './entities/codigo.entity';

@Injectable()
export class CodigosService extends GenericService<Codigo> {
  constructor(@InjectRepository(Codigo) repository: Repository<Codigo>) {
    super(repository);
  }
}
