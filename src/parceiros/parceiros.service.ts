import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';

import { Parceiro } from './entities/parceiro.entity';
@Injectable()
export class ParceirosService extends GenericService<Parceiro> {
  constructor(@InjectRepository(Parceiro) repository: Repository<Parceiro>) {
    super(repository);
  }
}
