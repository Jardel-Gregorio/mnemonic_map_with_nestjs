import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CodigosDnaModule } from './codigos_dna/codigos_dna.module';
import { CodigosDna } from './codigos_dna/entities/codigos_dna.entity';
import { CodigosParceirosModule } from './codigos_parceiros/codigos_parceiros.module';
import { CodigosParceiro } from './codigos_parceiros/entities/codigos_parceiro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'ProjetoFinal',
      username: 'postgres',
      password: 'dna123',
      host: 'localhost',
      port: 5432,
      entities: [CodigosDna, CodigosParceiro],
      synchronize: true,
      logging: true,
    }),
    CodigosDnaModule,
    CodigosParceirosModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthModule],
})
export class AppModule {}
