import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({
        example: "John Doe",
        description: "users full name"
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: "johndoe@gmail.com",
        description: "users email"
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "admin123",
        description: "users password min of 6 characters"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty({ example: "admin", enum: UserRole }) // Restrict to allowed values
    @IsNotEmpty()
    @IsString()
    @IsIn(["admin", "student"], { message: "Role must be either 'admin' or 'student'" }) // Ensure only allowed values
    role: UserRole; // Explicitly define type
}
