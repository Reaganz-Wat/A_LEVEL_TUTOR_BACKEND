import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly authRepository: Repository<User>
    ) {}

    async signIn(authDto: AuthDto): Promise<string> {
        return ""
    }

    async signUp() {}
}
