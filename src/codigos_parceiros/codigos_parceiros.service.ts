import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { CodigosParceiro } from './entities/codigos_parceiro.entity';

@Injectable()
export class CodigosParceirosService extends GenericService<CodigosParceiro> {
  constructor(
    @InjectRepository(CodigosParceiro) repository: Repository<CodigosParceiro>,
  ) {
    super(repository);
  }
}
