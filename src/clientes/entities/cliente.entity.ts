import { Parceiro } from 'src/parceiros/entities/parceiro.entity';

import {
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Parceiro, { eager: true })
  @JoinTable({ name: 'consulta' })
  parceiros: Parceiro[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
