import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CodigosDnaService } from './codigos_dna.service';
import { CreateCodigosDnaDto } from './dto/create-codigos_dna.dto';
import { UpdateCodigosDnaDto } from './dto/update-codigos_dna.dto';

@Controller('codigos-dna')
export class CodigosDnaController {
  constructor(private readonly codigosDnaService: CodigosDnaService) {}

  @Post()
  create(@Body() createCodigosDnaDto: CreateCodigosDnaDto) {
    return this.codigosDnaService.create(createCodigosDnaDto);
  }

  @Get()
  findAll() {
    return this.codigosDnaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigosDnaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCodigosDnaDto: UpdateCodigosDnaDto,
  ) {
    return this.codigosDnaService.update(+id, updateCodigosDnaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigosDnaService.remove(+id);
  }
}
