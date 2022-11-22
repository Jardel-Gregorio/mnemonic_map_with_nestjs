import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Parceiro } from 'src/parceiros/entities/parceiro.entity';

import {
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  telefone: string;

  @ManyToMany(() => Parceiro, (cliente) => Cliente)
  @JoinTable({ name: 'consulta' })
  parceiros: Parceiro[];

  @OneToOne((type) => Endereco, (cliente) => Cliente)
  endereco: Endereco;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
