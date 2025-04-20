import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTopicDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Introduction to modern physics",
        description: "This is the title of the subject"
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "This talks about the physics in the modern time, nuclear and atomic",
        description: "This is the description for the title of the subject"
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "87b286d4-0522-4fc2-8832-89d73e9cfb52",
        description: "This is the user-id"
    })
    userId?: string;
}
