import { Controller } from '@nestjs/common';

import { GenericController } from 'src/generic/generic.controller';
import { Exame } from './entities/exame.entity';
import { ExamesService } from './exames.service';

@Controller('exames')
export class ExamesController extends GenericController<Exame> {
  constructor(exameService: ExamesService) {
    super(exameService);
  }
}
