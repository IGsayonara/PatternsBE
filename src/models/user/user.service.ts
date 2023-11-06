import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';

export class UserService {
  async findAll(): Promise<User[]> {
    return await UserEntity.find();
  }
}
