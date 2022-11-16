import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { ConsultasService } from './consultas.service';
import { Consulta } from './entities/consulta.entity';

@Controller('consultas')
export class ConsultasController extends GenericController<Consulta> {
  constructor(consultaService: ConsultasService) {
    super(consultaService);
  }
}
