// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { TopicsModule } from './topics/topics.module';
// import { LessonsModule } from './lessons/lessons.module';
// import { QuestionsModule } from './questions/questions.module';
// import { ExamsModule } from './exams/exams.module';
// import { AiQuerriesModule } from './ai_querries/ai_querries.module';
// import { HistoryModule } from './history/history.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/entities/user.entity';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Topic } from './topics/entities/topic.entity';
// import { Lesson } from './lessons/entities/lesson.entity';
// import { Question } from './questions/entities/question.entity';
// import { History } from './history/entities/history.entity';
// import { Exam } from './exams/entities/exam.entity';
// import { AiQuerry } from './ai_querries/entities/ai_querry.entity';

// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),  // Make sure the config module is globally available
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get<string>('DB_HOST'),
//         port: configService.get<number>('DB_PORT'),
//         username: configService.get<string>('DB_USERNAME'),
//         password: configService.get<string>('DB_PASSWORD'),
//         database: configService.get<string>('DB_NAME'),
//         entities: [User, Topic, Lesson, Question, History, Exam, AiQuerry],
//         synchronize: false,  // Set to false in production
//       }),
//       inject: [ConfigService],
//     }),
//     UsersModule,
//     TopicsModule,
//     LessonsModule,
//     QuestionsModule,
//     ExamsModule,
//     AiQuerriesModule,
//     HistoryModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



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
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Topic } from './topics/entities/topic.entity';
import { Lesson } from './lessons/entities/lesson.entity';
import { Question } from './questions/entities/question.entity';
import { History } from './history/entities/history.entity';
import { Exam } from './exams/entities/exam.entity';
import { AiQuerry } from './ai_querries/entities/ai_querry.entity';
import { AuthModule } from './auth/auth.module';
import { AiChatModule } from './ai-chat/ai-chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Make sure the config module is globally available
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Topic, Lesson, Question, History, Exam, AiQuerry],
        synchronize: true,  // Set to false in production
        migrationsRun: true,  // Run migrations automatically on application startup
        migrations: [__dirname + '/migrations/*.ts'], // Define where migrations are stored
        cli: {
          migrationsDir: 'src/migrations', // Define migration directory
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    TopicsModule,
    LessonsModule,
    QuestionsModule,
    ExamsModule,
    AiQuerriesModule,
    HistoryModule,
    AuthModule,
    AiChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
