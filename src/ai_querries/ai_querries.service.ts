import { Injectable } from '@nestjs/common';
import { CreateAiQuerryDto } from './dto/create-ai_querry.dto';
import { UpdateAiQuerryDto } from './dto/update-ai_querry.dto';

@Injectable()
export class AiQuerriesService {
  create(createAiQuerryDto: CreateAiQuerryDto) {
    return 'This action adds a new aiQuerry';
  }

  findAll() {
    return `This action returns all aiQuerries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiQuerry`;
  }

  update(id: number, updateAiQuerryDto: UpdateAiQuerryDto) {
    return `This action updates a #${id} aiQuerry`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiQuerry`;
  }
}
