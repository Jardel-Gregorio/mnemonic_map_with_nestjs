import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodigosDnaService } from './codigos_dna.service';
import { CodigosDnaController } from './codigos_dna.controller';
import { CodigosDna } from './entities/codigos_dna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodigosDna])],
  controllers: [CodigosDnaController],
  providers: [CodigosDnaService],
})
export class CodigosDnaModule {}
