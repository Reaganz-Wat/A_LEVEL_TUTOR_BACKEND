import { ApiProperty } from '@nestjs/swagger';
import { ProjectBaseEntity } from 'src/common/entities/base.entity';
import { Topic } from 'src/topics/entities/topic.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User extends ProjectBaseEntity {
  @ApiProperty()
  @Column({ length: 255 })
  name: string;

  @ApiProperty()
  @Column({ unique: true, length: 255 })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: ['admin', 'student'], default: 'student' })
  role: 'admin' | 'student';

  @OneToMany(() => Topic, (topic) => topic.user)
  topic: Topic[]
}
