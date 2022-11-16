import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUsuario(nome: string, key: string): Promise<any> {
    const usuario = await this.usuariosService.findOne(nome);
    if (usuario && usuario.senha === key) {
      // eslint-disable-next-line
      const { senha, ...resultado } = usuario;
      return resultado;
    }
    return null;
  }

  async login(usuario: any) {
    const payload = { nome: usuario.nome, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
