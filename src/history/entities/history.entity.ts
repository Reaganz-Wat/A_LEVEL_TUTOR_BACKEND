import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("history")
export class History extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'enum', enum: ['learned', 'exam_attempt', 'ai_query'] })
    action: 'learned' | 'exam_attempt' | 'ai_query';
}
