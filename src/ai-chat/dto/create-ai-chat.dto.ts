import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAiChatDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the id of the topic you are searching for",
        example: "b1e3924e-84ae-4225-b0a3-b26eee3f4bdf"
    })
    topicId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the querry the user wants the ai to analyze",
        example: "What are the different types of energy"
    })
    querry: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the detailed description of the topic the ai will search",
        example: "This is the study of heat in relation to energy"
    })
    topicdescription: string;
}