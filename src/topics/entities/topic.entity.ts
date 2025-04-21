import { ApiProperty } from "@nestjs/swagger";
import { ProjectBaseEntity } from "src/common/entities/base.entity";
import { History } from "src/history/entities/history.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("topic")
export class Topic extends ProjectBaseEntity {
    @ApiProperty()
    @Column({ length: 255 })
    title: string;
  
    @ApiProperty()
    @Column('text')
    description: string;

    @ManyToOne(()=>User, (user)=>user.topic, {onDelete: "CASCADE"})
    user: User

    @OneToMany(() => History, (history) => history.topic)
    history: History[];
}