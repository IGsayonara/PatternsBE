import { UserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.interface';

export function mapUserToDto(userEntity: User): UserDto {
  return {
    id: userEntity.id,
    firstName: userEntity.firstName,
    lastName: userEntity.lastName,
    email: userEntity.email,
  };
}
