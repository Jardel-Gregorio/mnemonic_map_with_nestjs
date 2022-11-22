import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Endereco } from './entities/endereco.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class EnderecosService extends GenericService<Endereco> {
  constructor(@InjectRepository(Endereco) repository: Repository<Endereco>) {
    super(repository);
  }
}
