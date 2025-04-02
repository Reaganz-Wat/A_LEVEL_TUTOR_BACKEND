import { ApiProperty } from "@nestjs/swagger";
import { ProjectBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity("history")
export class History extends ProjectBaseEntity {
    @ApiProperty()
    @Column({ type: 'enum', enum: ['learned', 'exam_attempt', 'ai_query'] })
    action: 'learned' | 'exam_attempt' | 'ai_query';
}