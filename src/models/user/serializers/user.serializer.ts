import { UserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.interface';
import { UserEntity } from '../entities/user.entity';

export function mapUserToDto(user: User): UserDto {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}

export function mapUserEntityToInterface(user: UserEntity): User {
  return {
    ...user,
    roles: user?.roles?.map((role) => role.name),
  };
}
