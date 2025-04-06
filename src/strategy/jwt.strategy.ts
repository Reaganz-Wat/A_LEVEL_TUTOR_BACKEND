import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    @InjectRepository(User) private userRepository: Repository<User>, // Injecting TypeORM Repository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET') || 'defaultSecretKey', // fallback to a default secret if not found
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.userRepository.findOne({
      where: { id: String(payload.sub) }, // Convert payload.sub to a string
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Remove the password before returning the user
    const { password, ...userWithoutPassword } = user; // Destructure to exclude the password
    return userWithoutPassword;
  }
}
