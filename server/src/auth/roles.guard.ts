import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';

@Injectable()
export class HttpRolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;
    const request = context.switchToHttp().getRequest();
    return this.authService.checkUserRoles(request.user, ...roles);
  }
}

@Injectable()
export class GqlRolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('In Roles');
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;
    const [parent, args, ctx, info] = context.getArgs();
    return true;
    //return this.authService.checkUserRoles(ctx.request.user, ...roles);
  }
}
