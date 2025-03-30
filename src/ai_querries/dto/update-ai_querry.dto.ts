import { PartialType } from '@nestjs/mapped-types';
import { CreateAiQuerryDto } from './create-ai_querry.dto';

export class UpdateAiQuerryDto extends PartialType(CreateAiQuerryDto) {}
