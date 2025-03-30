import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("history")
export class History extends BaseEntity {
      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;
    @ApiProperty()
    @Column({ type: 'enum', enum: ['learned', 'exam_attempt', 'ai_query'] })
    action: 'learned' | 'exam_attempt' | 'ai_query';
}
