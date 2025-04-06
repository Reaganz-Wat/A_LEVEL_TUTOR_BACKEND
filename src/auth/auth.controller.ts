import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post("signup")
    signup(@Body() dto: CreateUserDto) {

        return this.authService.signUp(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signin(@Body() dto: AuthDto) {
        return this.authService.signIn(dto);
    }
}
