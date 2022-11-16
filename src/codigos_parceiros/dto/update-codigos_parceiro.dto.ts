import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigosParceiroDto } from './create-codigos_parceiro.dto';

export class UpdateCodigosParceiroDto extends PartialType(CreateCodigosParceiroDto) {}
