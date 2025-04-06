import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: "This is the email for the user",
        example: "johndoe@gmail.com"
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "The password for the user",
        example: "admin123"
    })
    password: string;
}