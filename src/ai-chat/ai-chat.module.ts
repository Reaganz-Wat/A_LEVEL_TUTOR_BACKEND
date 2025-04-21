import { Module } from '@nestjs/common';
import { TopicsModule } from 'src/topics/topics.module';
import { AiChatController } from './ai-chat.controller';
import { AiChatService } from './ai-chat.service';

@Module({
  imports: [TopicsModule],
  controllers: [AiChatController],
  providers: [AiChatService],
})
export class AiChatModule {}
