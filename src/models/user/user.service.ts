import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { mapUserEntityToInterface } from './serializers/user.serializer';
import { FindOptionsWhere } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    const users = await UserEntity.find();
    return users.map(mapUserEntityToInterface);
  }

  async findOne(options: FindOptionsWhere<UserEntity>): Promise<User> {
    const user = await UserEntity.findOne({ where: options });
    return mapUserEntityToInterface(user);
  }

  async addOne(user: CreateUserDto): Promise<User> {
    try {
      const payload: Partial<UserEntity> = { ...user, roles: [] };
      const userEntity = new UserEntity();
      Object.assign(userEntity, payload);
      await userEntity.save();
      return this.findOne({ email: userEntity.email });
    } catch (err) {
      throw new BadRequestException(
        'User with existing email is already exists',
      );
    }
  }

  async validateUserRole(
    options: FindOptionsWhere<UserEntity>,
    role: string,
  ): Promise<boolean> {
    const user = await this.findOne(options);

    return user.roles.includes(role);
  }
}
