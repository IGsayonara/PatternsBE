import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../models/user/user.service';
import { UserRequest } from '../../authentication/interfaces/userRequest.interface';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService, // Inject the user service
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.get<string>(
      'role',
      context.getHandler(),
    );

    if (!requiredRole) {
      return true; // No role is required, so access is granted
    }

    const request: UserRequest = context.switchToHttp().getRequest();
    const { email } = request.user;

    // Perform a database check to validate the user's role
    return this.userService.validateUserRole({ email }, requiredRole);
  }
}
