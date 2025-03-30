import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lesson")
export class Lesson extends BaseEntity {
      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;
    @ApiProperty()
    @Column('text')
    content: string;
}
