import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AiChatService } from './ai-chat.service';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';

@Controller('ai-chat')
export class AiChatController {
  constructor(private readonly aiChatService: AiChatService) {}

  @Post()
  create(@Body() createAiChatDto: CreateAiChatDto) {
    return this.aiChatService.create(createAiChatDto);
  }

  @Post('/ai-querry')
  aiQuerryGenerator(@Body() aiBody: CreateAiChatDto) {
    console.log("First things", aiBody)
    return this.aiChatService.generateAIResponse(aiBody)
  }


  @Get()
  findAll() {
    return this.aiChatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiChatDto: UpdateAiChatDto) {
    return this.aiChatService.update(+id, updateAiChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiChatService.remove(+id);
  }
}
