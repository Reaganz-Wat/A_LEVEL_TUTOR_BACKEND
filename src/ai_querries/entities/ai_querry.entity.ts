import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity("querry")
export class AiQuerry extends BaseEntity {
    @ApiProperty()
    @Column('text')
    query: string;
  
    @ApiProperty()
    @Column('text')
    response: string;
}
