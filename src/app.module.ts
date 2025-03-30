import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { LessonsModule } from './lessons/lessons.module';
import { QuestionsModule } from './questions/questions.module';
import { ExamsModule } from './exams/exams.module';
import { AiQuerriesModule } from './ai_querries/ai_querries.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [UsersModule, TopicsModule, LessonsModule, QuestionsModule, ExamsModule, AiQuerriesModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
