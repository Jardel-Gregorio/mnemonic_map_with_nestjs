import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

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
}
