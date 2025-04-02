import { ApiProperty } from '@nestjs/swagger';
import { ProjectBaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('exam')
export class Exam extends ProjectBaseEntity {
  @ApiProperty()
  @Column({ type: 'int' })
  score: number;

  @ApiProperty()
  @Column({ type: 'int' })
  total_questions: number;
}
