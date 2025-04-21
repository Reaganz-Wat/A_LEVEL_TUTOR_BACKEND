import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { AiChatService } from './ai-chat.service';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('ai-chat')
export class AiChatController {
  constructor(private readonly aiChatService: AiChatService) {}

  @Post()
  create(@Body() createAiChatDto: CreateAiChatDto) {
    return this.aiChatService.create(createAiChatDto);
  }

  @Post('/ai-querry')
  aiQuerryGenerator(@Body() aiBody: CreateAiChatDto, @GetUser('id') userId: string) {
    return this.aiChatService.generateAIResponse(aiBody, userId);
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
