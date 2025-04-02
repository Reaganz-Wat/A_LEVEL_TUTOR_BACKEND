import { ApiProperty } from "@nestjs/swagger";
import { ProjectBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity("question")
export class Question extends ProjectBaseEntity {
    @ApiProperty()
    @Column('text')
    question: string;
}