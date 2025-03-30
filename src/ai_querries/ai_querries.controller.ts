import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiQuerriesService } from './ai_querries.service';
import { CreateAiQuerryDto } from './dto/create-ai_querry.dto';
import { UpdateAiQuerryDto } from './dto/update-ai_querry.dto';

@Controller('ai-querries')
export class AiQuerriesController {
  constructor(private readonly aiQuerriesService: AiQuerriesService) {}

  @Post()
  create(@Body() createAiQuerryDto: CreateAiQuerryDto) {
    return this.aiQuerriesService.create(createAiQuerryDto);
  }

  @Get()
  findAll() {
    return this.aiQuerriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiQuerriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiQuerryDto: UpdateAiQuerryDto) {
    return this.aiQuerriesService.update(+id, updateAiQuerryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiQuerriesService.remove(+id);
  }
}
