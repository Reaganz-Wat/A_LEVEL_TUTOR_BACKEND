import { Module } from '@nestjs/common';
import { AiQuerriesService } from './ai_querries.service';
import { AiQuerriesController } from './ai_querries.controller';

@Module({
  controllers: [AiQuerriesController],
  providers: [AiQuerriesService],
})
export class AiQuerriesModule {}
