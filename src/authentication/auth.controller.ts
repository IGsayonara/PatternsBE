import {
  Controller,
  Post,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { getEmptySuccessMessage } from '../common/helpers/emptySuccessMessage';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('/auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() credentials: LoginDto) {
    return this.authService.login(credentials);
  }

  @Post('/register')
  async register(@Body() user: RegisterDto) {
    await this.authService.register(user);
    return getEmptySuccessMessage();
  }
}
