import { Module } from '@nestjs/common';
import { TopicsModule } from 'src/topics/topics.module';
import { AiChatController } from './ai-chat.controller';
import { AiChatService } from './ai-chat.service';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [TopicsModule, HistoryModule],
  controllers: [AiChatController],
  providers: [AiChatService],
})
export class AiChatModule {}
