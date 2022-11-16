import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodigosParceirosService } from './codigos_parceiros.service';
import { CreateCodigosParceiroDto } from './dto/create-codigos_parceiro.dto';
import { UpdateCodigosParceiroDto } from './dto/update-codigos_parceiro.dto';

@Controller('codigos-parceiros')
export class CodigosParceirosController {
  constructor(private readonly codigosParceirosService: CodigosParceirosService) {}

  @Post()
  create(@Body() createCodigosParceiroDto: CreateCodigosParceiroDto) {
    return this.codigosParceirosService.create(createCodigosParceiroDto);
  }

  @Get()
  findAll() {
    return this.codigosParceirosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigosParceirosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodigosParceiroDto: UpdateCodigosParceiroDto) {
    return this.codigosParceirosService.update(+id, updateCodigosParceiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigosParceirosService.remove(+id);
  }
}
