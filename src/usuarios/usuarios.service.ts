import { Injectable } from '@nestjs/common';

export type Usuario = any;

@Injectable()
export class UsuariosService {
  private readonly usuarios = [
    {
      id: 1,
      nome: 'Jardel',
      senha: '123',
    },
    {
      id: 2,
      nome: 'Taniro',
      senha: '123',
    },
    {
      id: 3,
      nome: 'Isis',
      senha: '123',
    },
  ];

  async findOne(nome: string): Promise<Usuario | undefined> {
    return this.usuarios.find((usuario) => usuario.nome === nome);
  }
}
