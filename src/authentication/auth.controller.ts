import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserRequest } from './interfaces/userRequest.interface';

@UseGuards(LocalAuthGuard)
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: UserRequest) {
    return this.authService.login(req.user);
  }
}
