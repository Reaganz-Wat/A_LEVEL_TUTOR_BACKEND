import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProjectBaseEntity } from 'src/common/entities/base.entity';
import { Entity } from 'typeorm';

@Entity('querry')
export class AiQuerry extends ProjectBaseEntity {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is the id of the topic you are searching for',
    example: '1',
  })
  topicId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is the querry the user wants the ai to analyze',
    example: 'What are the different types of energy in physics heat topic',
  })
  querry: string;
}
