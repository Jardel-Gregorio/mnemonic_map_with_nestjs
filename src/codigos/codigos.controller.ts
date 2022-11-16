import { Controller } from '@nestjs/common';

import { GenericController } from 'src/generic/generic.controller';
import { CodigosService } from './codigos.service';
import { Codigo } from './entities/codigo.entity';

@Controller('codigos')
export class CodigosController extends GenericController<Codigo> {
  constructor(codigosService: CodigosService) {
    super(codigosService);
  }
}
