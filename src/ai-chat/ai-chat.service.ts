import { Injectable } from '@nestjs/common';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';
import { CreateAiQuerryDto } from 'src/ai_querries/dto/create-ai_querry.dto';

@Injectable()
export class AiChatService {
  create(createAiChatDto: CreateAiChatDto) {
    return 'This action adds a new aiChat';
  }

  async generateAIResponse(createAiQuerryDto: CreateAiQuerryDto) {
    return "This is the generated ai querry";
  }


  findAll() {
    return `This action returns all aiChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiChat`;
  }

  update(id: number, updateAiChatDto: UpdateAiChatDto) {
    return `This action updates a #${id} aiChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiChat`;
  }
}
