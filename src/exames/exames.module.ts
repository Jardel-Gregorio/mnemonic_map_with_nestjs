import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExamesService } from './exames.service';
import { ExamesController } from './exames.controller';
import { Parceiro } from 'src/parceiros/entities/parceiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parceiro])],
  controllers: [ExamesController],
  providers: [ExamesService],
})
export class ExamesModule {}
