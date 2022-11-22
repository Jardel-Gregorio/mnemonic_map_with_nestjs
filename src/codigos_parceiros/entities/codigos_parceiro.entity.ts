import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Codigo } from 'src/codigos/entities/codigo.entity';
import { Parceiro } from 'src/parceiros/entities/parceiro.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';
@Entity()
export class CodigosParceiro extends AbstractEntity {
  @Column()
  codigoParceiros: string;

  @ManyToOne(() => Codigo)
  @JoinColumn({ name: 'codigo_id' })
  codigo: Codigo;

  @ManyToOne(() => Parceiro)
  @JoinColumn({ name: 'parceiro_id' })
  carceiro: Parceiro;
}
