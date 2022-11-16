import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Parceiro } from './entities/parceiro.entity';
import { ParceirosService } from './parceiros.service';

@Controller('parceiros')
export class ParceirosController extends GenericController<Parceiro> {
  constructor(parceiroService: ParceirosService) {
    super(parceiroService);
  }
}
