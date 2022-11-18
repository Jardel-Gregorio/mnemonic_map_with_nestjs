import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Consulta extends AbstractEntity {
  @Column()
  data: Date;
}
