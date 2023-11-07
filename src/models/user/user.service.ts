import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { mapUserEntityToInterface } from './serializers/user.serializer';
import { FindOptionsWhere } from 'typeorm';

export class UserService {
  async findAll(): Promise<User[]> {
    const users = await UserEntity.find();
    return users.map(mapUserEntityToInterface);
  }

  async findOne(options: FindOptionsWhere<UserEntity>): Promise<User> {
    const user = await UserEntity.findOne({ where: options });
    return mapUserEntityToInterface(user);
  }

  async validateUserRole(
    options: FindOptionsWhere<UserEntity>,
    role: string,
  ): Promise<boolean> {
    const user = await this.findOne(options);

    return user.roles.includes(role);
  }
}
