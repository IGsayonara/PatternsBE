import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
import { mapUserEntityToInterface } from './serializers/user.serializer';

export class UserService {
  async findAll(): Promise<User[]> {
    const users = await UserEntity.find();
    return users.map(mapUserEntityToInterface);
  }
}
