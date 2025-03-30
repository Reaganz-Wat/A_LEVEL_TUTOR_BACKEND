import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("question")
export class Question extends BaseEntity {

    @ApiProperty()
    @Column('text')
    question: string;
}
