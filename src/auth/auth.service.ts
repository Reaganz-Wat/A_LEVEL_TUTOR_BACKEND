import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2'
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly authRepository: Repository<User>,
        private config: ConfigService,
        private jwt: JwtService
    ) {}

    async signIn(dto: AuthDto) {
        const user = await this.authRepository.findOne({
          where: { email: dto.email }
        });
    
        if (!user) {
          throw new ForbiddenException('Invalid credentials');
        }
    
        const pwMatches = await argon.verify(user.password, dto.password);
    
        if (!pwMatches) {
          throw new ForbiddenException('Credentials Incorrect');
        }
    
        const tokenDetails = await this.signToken(user.id, user.email);
    
        const data = {
          email: user.email,
          name: user.name,
          role: user.role,
        };
    
        return {
          data,
          ...tokenDetails,
        };
      }

    async signUp(createUserDto: CreateUserDto) {
    
        const hash = await argon.hash(createUserDto.password);

        const { email, name, role } = createUserDto
    
        // Check for existing user
        const existing = await this.authRepository.findOne({ where: { email } });
        if (existing) {
          throw new ForbiddenException('Credentials taken');
        }
    
        const user = this.authRepository.create({email, name, role, password: hash});
    
        await this.authRepository.save(user);
    
        return this.signToken(user.id, user.email);
      }
    

    async signToken(userId: string, email: string): Promise<{access_token: string}> {
        const payload = {
            sub: userId, email
        }

        const secret = this.config.get("JWT_SECRET")

        const token = await this.jwt.signAsync(payload, {
            expiresIn: "6h", secret: secret
        })

        return {
            access_token: token
        }
    }
}
