import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicsService {

  constructor(
    @InjectRepository(Topic) private readonly topicRepository: Repository<Topic>
  ) {}

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const newTopic = this.topicRepository.create(
      {title: createTopicDto.title,
      description: createTopicDto.description,
      user: {id: createTopicDto.userId}
    }
    );
    return await this.topicRepository.save(newTopic);
  }

  async findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  async findOne(id: string): Promise<Topic> {
    const oneTopic = await this.topicRepository.findOne({where: {id}});

    if (!oneTopic) {
      throw new Error(`Topic with id ${id} not found`)
    }

    return oneTopic
  }

  async update(id: string, updateTopicDto: UpdateTopicDto){
    return await this.topicRepository.update(id, updateTopicDto);
  }

  async remove(id: string) {
    await this.topicRepository.delete(id);
  }
}