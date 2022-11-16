import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Parceiro extends AbstractEntity {
  @Column()
  dataPedido: Date;

  @Column()
  descricao: string;
}