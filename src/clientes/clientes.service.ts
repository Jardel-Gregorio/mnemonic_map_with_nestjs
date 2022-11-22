import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: any) {
    return this.clienteRepository.findOneBy({ id: id });
  }

  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.save(createClienteDto);
  }

  update(id: any, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  remove(id: any) {
    return this.clienteRepository.delete(id);
  }
}
