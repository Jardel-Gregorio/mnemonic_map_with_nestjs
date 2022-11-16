import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nome: string, key: string): Promise<any> {
    const usuario = await this.authService.validateUsuario(nome, key);

    if (!usuario) {
      throw new UnauthorizedException();
    }

    return usuario;
  }
}
