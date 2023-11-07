import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { mapUserToDto } from './serializers/user.serializer';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/all')
  async findAll() {
    return await this.userService
      .findAll()
      .then((users) => users.map(mapUserToDto));
  }
}
