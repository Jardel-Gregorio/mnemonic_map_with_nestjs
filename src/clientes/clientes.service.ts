import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService extends GenericService<Cliente> {
  constructor(@InjectRepository(Cliente) repository: Repository<Cliente>) {
    super(repository);
  }
}
