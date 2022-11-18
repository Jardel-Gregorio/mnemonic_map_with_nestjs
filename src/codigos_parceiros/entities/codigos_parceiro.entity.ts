import { Codigo } from 'src/codigos/entities/codigo.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class CodigosParceiro extends AbstractEntity {
  @Column()
  codigoParceiros: string;

  @ManyToOne(() => Codigo)
  @JoinColumn({ name: 'codigo_id' })
  codigo: Codigo;
}
