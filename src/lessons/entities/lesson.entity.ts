import { ApiProperty } from "@nestjs/swagger";
import { ProjectBaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity("lesson")
export class Lesson extends ProjectBaseEntity {
    @ApiProperty()
    @Column('text')
    content: string;
}
