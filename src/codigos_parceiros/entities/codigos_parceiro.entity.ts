import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class CodigosParceiro extends AbstractEntity {
  @Column()
  codigoParceiros: Date;
}
