import { Controller } from '@nestjs/common';

import { GenericController } from 'src/generic/generic.controller';
import { CodigosDnaService } from './codigos_dna.service';
import { CodigosDna } from './entities/codigos_dna.entity';

@Controller('codigos-dna')
export class CodigosDnaController extends GenericController<CodigosDna> {
  constructor(codigosDnaService: CodigosDnaService) {
    super(codigosDnaService);
  }
}
