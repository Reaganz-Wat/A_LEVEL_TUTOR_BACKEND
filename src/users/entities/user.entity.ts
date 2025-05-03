import { ApiProperty } from '@nestjs/swagger';
import { ProjectBaseEntity } from 'src/common/entities/base.entity';
import { Topic } from 'src/topics/entities/topic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student'
}

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
  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  role: UserRole;

  @OneToMany(() => Topic, (topic) => topic.user)
  topic: Topic[]

  @OneToMany(() => Topic, (topic) => topic.user)
  history: Topic[]
}
