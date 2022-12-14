import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CodigosParceirosModule } from './codigos_parceiros/codigos_parceiros.module';
import { CodigosParceiro } from './codigos_parceiros/entities/codigos_parceiro.entity';
import { ParceirosModule } from './parceiros/parceiros.module';
import { ClientesModule } from './clientes/clientes.module';
import { CodigosModule } from './codigos/codigos.module';
import { Codigo } from './codigos/entities/codigo.entity';
import { Cliente } from './clientes/entities/cliente.entity';
import { Parceiro } from './parceiros/entities/parceiro.entity';
import { EnderecosModule } from './enderecos/enderecos.module';
import { Endereco } from './enderecos/entities/endereco.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'ProjetoFinal',
      username: 'postgres',
      password: 'dna123',
      host: 'localhost',
      port: 5432,
      entities: [Codigo, CodigosParceiro, Cliente, Parceiro, Endereco],
      synchronize: true,
      logging: true,
    }),
    CodigosParceirosModule,
    AuthModule,
    UsersModule,
    ParceirosModule,
    ClientesModule,
    CodigosModule,
    EnderecosModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthModule],
})
export class AppModule {}
