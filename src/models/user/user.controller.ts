import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { mapUserToDto } from './serializers/user.serializer';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/me')
  async findCurrent() {
    return await this.userService
      .findAll()
      .then((users) => users.map(mapUserToDto));
  }
}
