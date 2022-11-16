import { Controller } from '@nestjs/common';

import { GenericController } from 'src/generic/generic.controller';
import { ClientesService } from './clientes.service';
import { Cliente } from './entities/cliente.entity';

@Controller('clientes')
export class ClientesController extends GenericController<Cliente> {
  constructor(clientesService: ClientesService) {
    super(clientesService);
  }
}
