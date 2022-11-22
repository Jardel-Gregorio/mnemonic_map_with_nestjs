import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Endereco } from './entities/endereco.entity';
import { EnderecosService } from './enderecos.service';

@Controller('enderecos')
export class EnderecosController extends GenericController<Endereco> {
  constructor(enderecoService: EnderecosService) {
    super(enderecoService);
  }
}
