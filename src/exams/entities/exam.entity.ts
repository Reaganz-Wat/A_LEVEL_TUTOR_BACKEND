import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";

@Entity("exam")
export class Exam {
    @ApiProperty()
    @Column({ type: 'int' })
  score: number;

  @ApiProperty()
  @Column({ type: 'int' })
  total_questions: number;
}
