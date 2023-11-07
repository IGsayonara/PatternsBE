import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user/interfaces/user.interface';
import { LoginResponseDto } from './dto/login.dto';
import { UserEntity } from '../models/user/entities/user.entity';
import { mapUserEntityToInterface } from '../models/user/serializers/user.serializer';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await UserEntity.findOne({
      where: { email },
      select: { id: true, password: true, email: true },
    });

    // TODO add bcrypt
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return mapUserEntityToInterface(user);
  }
  login(user: JwtPayload): LoginResponseDto {
    const payload = { email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
