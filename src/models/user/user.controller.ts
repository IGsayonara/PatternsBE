import {
  Controller,
  Get,
  Request,
  SetMetadata,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { mapUserToDto } from './serializers/user.serializer';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { UserRequest } from '../../authentication/interfaces/userRequest.interface';
import { UserDto } from './dto/user.dto';
import { RoleGuard } from '../../common/guards/role.guard';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/all')
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users.map(mapUserToDto);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/me')
  @SetMetadata('role', 'admin')
  async findCurrent(@Request() req: UserRequest): Promise<UserDto> {
    const email = req.user.email;

    if (!email) {
      throw new UnauthorizedException();
    }

    const user = await this.userService.findOne({ email });
    return mapUserToDto(user);
  }
}
