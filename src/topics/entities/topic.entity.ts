import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("topic")
export class Topic extends BaseEntity {
    @ApiProperty()
    @Column({ length: 255 })
    title: string;
  
    @ApiProperty()
    @Column('text')
    description: string;
}
