import { Module } from '@nestjs/common';
import { AiChatService } from './ai-chat.service';
import { AiChatController } from './ai-chat.controller';

@Module({
  controllers: [AiChatController],
  providers: [AiChatService],
})
export class AiChatModule {}
