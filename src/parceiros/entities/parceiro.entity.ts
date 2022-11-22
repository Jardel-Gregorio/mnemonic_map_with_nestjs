import { Cliente } from 'src/clientes/entities/cliente.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Parceiro extends AbstractEntity {
  @Column()
  nome: string;

  @Column()
  crm: number;

  @Column()
  especialidade: string;

  @Column()
  telefone: string;

  @ManyToMany(() => Cliente, (parceiro) => Parceiro)
  clientes: Cliente[];
}
