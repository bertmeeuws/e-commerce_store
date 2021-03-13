import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Injectable()
export class HttpJwtGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(ctx: ExecutionContext): boolean {
    try {
      const req = ctx.switchToHttp().getRequest();
      const token = this.authService.getTokenFromRequestAuthHeader(req);
      console.log('Token: ' + token);
      const user = this.authService.verifyJwt(token);
      req.user = user;
      return true;
    } catch (err) {
      console.log('[HttpJwtGuard] caught err:', err);
      return false;
    }
  }
}

@Injectable()
export class GqlJwtGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(ctx: ExecutionContext): boolean {
    try {
      // This is GraphQL resolver signature
      // (parent, args, context, info) => {}
      const [parent, args, gqlReqCtx, info] = ctx.getArgs();
      const gqlCtx = GqlExecutionContext.create(ctx);
      const req = gqlCtx.getContext().request;

      const token = this.authService.getTokenFromRequestAuthHeader(req);
      const user = this.authService.verifyJwt(token);

      // Set "user" property in GraphQL request context object
      req.user = user;
      return true;
    } catch (err) {
      console.log('[GqlJwtGuard] caught err:', err);
      return false;
    }
  }
}
