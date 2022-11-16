import { Module } from '@nestjs/common';
import { CodigosDnaService } from './codigos_dna.service';
import { CodigosDnaController } from './codigos_dna.controller';

@Module({
  controllers: [CodigosDnaController],
  providers: [CodigosDnaService]
})
export class CodigosDnaModule {}
