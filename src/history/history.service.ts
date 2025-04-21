import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities/history.entity';
import { User } from 'src/users/entities/user.entity';
import { Topic } from 'src/topics/entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
  ) {}

  async create(createHistoryDto: CreateHistoryDto): Promise<History> {
    const { querry, response, userId, topicId } = createHistoryDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const topic = await this.topicRepository.findOne({
      where: { id: topicId },
    });
    if (!topic) throw new NotFoundException('Topic not found');

    const history = this.historyRepository.create({
      querry,
      response,
      user,
      topic,
    });

    return this.historyRepository.save(history);
  }

  // async findAll(userId: string) {
  //   const histories = await this.historyRepository.find({
  //     where: {
  //       user: { id: userId },
  //     },
  //     relations: ['topic'],
  //     order: {
  //       createdAt: 'DESC',
  //     },
  //   });
  
  //   // Group by topicId
  //   const grouped = histories.reduce((acc, history) => {
  //     const topicId = history.topic.id;
  //     if (!acc[topicId]) {
  //       acc[topicId] = {
  //         topicId: history.topic.id,
  //         topicTitle: history.topic.title,
  //         queries: [],
  //       };
  //     }
  //     acc[topicId].queries.push({
  //       query: history.querry,
  //       response: history.response,
  //       createdAt: history.createdAt,
  //     });
  //     return acc;
  //   }, {});
  
  //   // Return as array
  //   return Object.values(grouped);
  // }

  async findAll(userId: string) {
    const histories = await this.historyRepository.find({
      where: {
        user: { id: userId },
      },
      relations: ['topic'],
      order: {
        createdAt: 'DESC',
      },
    });
  
    const grouped = histories.reduce((acc, history) => {
      const topicId = history.topic.id;
      if (!acc[topicId]) {
        acc[topicId] = {
          topicId: history.topic.id,
          topicTitle: history.topic.title,
          topicDescription: history.topic.description,
          queries: [],
        };
      }
      acc[topicId].queries.push({
        query: history.querry,
        response: history.response,
        createdAt: history.createdAt,
      });
      return acc;
    }, {});
  
    return Object.values(grouped);
  }
  
  

  async findByTopicIdUserId(topicId: string, userId: string): Promise<History[]> {
    const history = await this.historyRepository.find({where: {topic: {id: topicId}, user: {id: userId}}});
    if (!history) throw new NotFoundException('History not found');
    return history;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
