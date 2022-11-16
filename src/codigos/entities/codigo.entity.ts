import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Codigo extends AbstractEntity {
  @Column()
  dataPedido: Date;

  @Column()
  descricao: string;
}
