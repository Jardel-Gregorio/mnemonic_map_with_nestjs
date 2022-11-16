import { Injectable } from '@nestjs/common';
import { CreateCodigosParceiroDto } from './dto/create-codigos_parceiro.dto';
import { UpdateCodigosParceiroDto } from './dto/update-codigos_parceiro.dto';

@Injectable()
export class CodigosParceirosService {
  create(createCodigosParceiroDto: CreateCodigosParceiroDto) {
    return 'This action adds a new codigosParceiro';
  }

  findAll() {
    return `This action returns all codigosParceiros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codigosParceiro`;
  }

  update(id: number, updateCodigosParceiroDto: UpdateCodigosParceiroDto) {
    return `This action updates a #${id} codigosParceiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} codigosParceiro`;
  }
}
