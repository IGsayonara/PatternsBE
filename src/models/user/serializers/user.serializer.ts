import { UserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.interface';

export function mapUserToDto(user: User): UserDto {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}
