import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("lesson")
export class Lesson extends BaseEntity {
    @ApiProperty()
    @Column('text')
    content: string;
}
