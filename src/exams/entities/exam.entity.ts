import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exam")
export class Exam {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @ApiProperty()
    @Column({ type: 'int' })
  score: number;

  @ApiProperty()
  @Column({ type: 'int' })
  total_questions: number;
}
