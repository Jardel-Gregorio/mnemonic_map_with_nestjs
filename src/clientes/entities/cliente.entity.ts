import { AbstractEntity } from 'src/generic/entities/abstract-entity';
import { Parceiro } from 'src/parceiros/entities/parceiro.entity';

import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Cliente extends AbstractEntity {
  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  telefone: string;

  @ManyToMany(() => Parceiro, { eager: true })
  @JoinTable({ name: 'consulta' })
  parceiros: Parceiro[];
}
