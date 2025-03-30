import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("topic")
export class Topic extends BaseEntity {
      @ApiProperty()
      @PrimaryGeneratedColumn('uuid')
      id: string;
    @ApiProperty()
    @Column({ length: 255 })
    title: string;
  
    @ApiProperty()
    @Column('text')
    description: string;
}
