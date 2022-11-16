import { Controller } from '@nestjs/common';

import { GenericController } from 'src/generic/generic.controller';
import { CodigosParceirosService } from './codigos_parceiros.service';
import { CodigosParceiro } from './entities/codigos_parceiro.entity';

@Controller('codigos-parceiros')
export class CodigosParceirosController extends GenericController<CodigosParceiro> {
  constructor(codigosParceiroService: CodigosParceirosService) {
    super(codigosParceiroService);
  }
}
