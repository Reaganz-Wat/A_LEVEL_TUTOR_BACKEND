import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAiChatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the id of the topic you are searching for",
        example: "1"
    })
    topicId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the querry the user wants the ai to analyze",
        example: "What are the different types of energy"
    })
    querry: string;
}