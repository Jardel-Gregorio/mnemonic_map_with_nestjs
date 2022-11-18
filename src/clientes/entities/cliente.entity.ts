import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Cliente extends AbstractEntity {
  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  telefone: string;
}
