import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParceirosService } from './parceiros.service';
import { ParceirosController } from './parceiros.controller';
import { Parceiro } from './entities/parceiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parceiro])],
  controllers: [ParceirosController],
  providers: [ParceirosService],
})
export class ParceirosModule {}
