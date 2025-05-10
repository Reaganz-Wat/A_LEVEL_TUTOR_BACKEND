import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRole } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from 'src/topics/entities/topic.entity';

export interface Analytics {
  totalUsers: number;
  totalTopics: number;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ user: User; message: string }> {
    const newUser = this.userRepository.create(createUserDto);
    const createdUser = await this.userRepository.save(newUser);
    return {
      user: createdUser,
      message: 'User created successfully',
    };
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const oneUser = await this.userRepository.findOne({ where: { id } });

    if (!oneUser) {
      throw new Error(`User with id: ${id} not found`);
    }

    return oneUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async analytics(): Promise<Analytics> {
    const totalUsers = await this.userRepository.count({
      where: { role: UserRole.STUDENT },
    });
    const totalTopics = await this.topicRepository.count();

    return {
      totalUsers,
      totalTopics,
    };
  }
}
