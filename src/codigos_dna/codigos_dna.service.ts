import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { CodigosDna } from './entities/codigos_dna.entity';

@Injectable()
export class CodigosDnaService extends GenericService<CodigosDna> {
  constructor(
    @InjectRepository(CodigosDna) repository: Repository<CodigosDna>,
  ) {
    super(repository);
  }
}
