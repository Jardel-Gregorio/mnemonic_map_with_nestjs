import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodigosParceirosService } from './codigos_parceiros.service';
import { CodigosParceirosController } from './codigos_parceiros.controller';
import { CodigosParceiro } from './entities/codigos_parceiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodigosParceiro])],
  controllers: [CodigosParceirosController],
  providers: [CodigosParceirosService],
})
export class CodigosParceirosModule {}
