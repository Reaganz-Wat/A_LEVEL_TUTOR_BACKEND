import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateHistoryDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "What is Newton's second law?" })
    querry: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "Newton's second law states that Force = Mass × Acceleration (F=ma)." })
    response: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "user_id_here" })
    userId: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "topic_id_here" })
    topicId: string;
}
