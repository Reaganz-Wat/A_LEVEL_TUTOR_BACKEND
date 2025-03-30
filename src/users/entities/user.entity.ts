import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("user")
export class User extends BaseEntity {

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
}
