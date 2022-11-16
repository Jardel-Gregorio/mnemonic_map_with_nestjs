import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigosDnaDto } from './create-codigos_dna.dto';

export class UpdateCodigosDnaDto extends PartialType(CreateCodigosDnaDto) {}
