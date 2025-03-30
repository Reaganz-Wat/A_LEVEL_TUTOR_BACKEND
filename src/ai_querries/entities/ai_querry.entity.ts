import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("querry")
export class AiQuerry extends BaseEntity {
      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;
    @ApiProperty()
    @Column('text')
    query: string;
  
    @ApiProperty()
    @Column('text')
    response: string;
}
