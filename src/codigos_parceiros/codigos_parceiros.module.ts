import { Module } from '@nestjs/common';
import { CodigosParceirosService } from './codigos_parceiros.service';
import { CodigosParceirosController } from './codigos_parceiros.controller';

@Module({
  controllers: [CodigosParceirosController],
  providers: [CodigosParceirosService]
})
export class CodigosParceirosModule {}
