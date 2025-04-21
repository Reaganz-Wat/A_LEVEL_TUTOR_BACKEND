import { ApiProperty } from "@nestjs/swagger";
import { ProjectBaseEntity } from "src/common/entities/base.entity";
import { Topic } from "src/topics/entities/topic.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("history")
export class History extends ProjectBaseEntity {
    @Column("text")
    querry: string;

    @Column("text")
    response: string;

    @ManyToOne(() => User, (user) => user.history)
    user: User;

    @ManyToOne(() => Topic, (topic) => topic.history)
    topic: Topic;
}