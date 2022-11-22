import { Cliente } from 'src/clientes/entities/cliente.entity';
import { AbstractEntity } from 'src/generic/entities/abstract-entity';

import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Endereco extends AbstractEntity {
  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  estado: string;

  @OneToOne(() => Cliente, { eager: true })
  @JoinColumn({ name: 'cliente_id' })
  clientes: Cliente;
}
