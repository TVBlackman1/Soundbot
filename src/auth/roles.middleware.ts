import {CanActivate, ExecutionContext, Injectable, SetMetadata} from '@nestjs/common';
import {Role} from '../constants/role.enum';
import {Reflector} from '@nestjs/core';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext) {
    const {user,} = context.switchToHttp().getRequest();
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    return requiredRoles.includes(user.role);
  }
}
