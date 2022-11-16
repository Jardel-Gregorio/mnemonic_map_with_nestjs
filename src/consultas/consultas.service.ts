import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Consulta } from './entities/consulta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultasService extends GenericService<Consulta> {
  constructor(@InjectRepository(Consulta) repository: Repository<Consulta>) {
    super(repository);
  }
}
