import { Injectable } from '@nestjs/common';
import { CreateCodigosDnaDto } from './dto/create-codigos_dna.dto';
import { UpdateCodigosDnaDto } from './dto/update-codigos_dna.dto';

@Injectable()
export class CodigosDnaService {
  create(createCodigosDnaDto: CreateCodigosDnaDto) {
    return 'This action adds a new codigosDna';
  }

  findAll() {
    return `This action returns all codigosDna`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codigosDna`;
  }

  update(id: number, updateCodigosDnaDto: UpdateCodigosDnaDto) {
    return `This action updates a #${id} codigosDna`;
  }

  remove(id: number) {
    return `This action removes a #${id} codigosDna`;
  }
}
