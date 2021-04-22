import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';
import { JwtFromRequest } from './interface/jwt.interface';
import SECRET from './constants/secret';
import { UnauthorizedError } from 'type-graphql';

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

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      // This is GraphQL resolver signature
      // (parent, args, context, info) => {}
      console.log('inside signature');
      const [parent, args, gqlReqCtx, info] = ctx.getArgs();
      const gqlCtx = GqlExecutionContext.create(ctx);
      const req = gqlCtx.getContext().request;

      const res = gqlCtx.getContext().response;

      const cookie = req?.cookies?.token;

      if (!cookie) {
        throw new UnauthorizedError();
      }

      const decoded = jwt.verify(cookie, SECRET.mainToken);

      if (!decoded) {
        throw new UnauthorizedError();
      }

      const {
        accessToken,
        refreshToken,
        user_id,
        count,
      } = decoded as JwtFromRequest;

      //Now decode our accesstoken & refreshtokens

      if (!user_id || !accessToken) {
        throw new UnauthorizedError();
      }

      //ACCESS TOKEN//

      try {
        const decodedAccess = jwt.verify(
          accessToken,
          SECRET.accessToken,
        ) as any;

        //Setting user identity, to later use in the @Decorator
        req.user = decodedAccess.userId;
        return true;
      } catch (e) {
        console.log('Accesstoken expired, checking for refreshtoken');
        //Check refresh token here

        if (!refreshToken) {
          throw new UnauthorizedError();
        }

        try {
          const decodedRefresh = jwt.verify(
            refreshToken,
            SECRET.refreshToken,
          ) as any;

          if (decodedRefresh) {
            req.user = decodedRefresh.userId;
          } else {
            return false;
          }
          //Refresh is active
          //Checking count, if the same grant new access and refresh token if not give error, because someone might have resetted their pass

          console.log('Now checking if count aligns');

          const response = await this.authService.checkIfCountAligns(
            user_id,
            count,
          );

          if (!response) {
            console.log('Count does not align');
            throw new UnauthorizedError();
          }

          console.log('Refresh token works and count aligns');
        } catch (err) {
          console.log('Count does not align or refreshtoken');
          throw new UnauthorizedError();
        }
      }

      return true;
    } catch (err) {
      console.log('[GqlJwtGuard] caught err:', err);
      return false;
    }
  }
}
