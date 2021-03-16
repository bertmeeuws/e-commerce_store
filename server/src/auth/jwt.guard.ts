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
      console.log('inside signature');
      const [parent, args, gqlReqCtx, info] = ctx.getArgs();
      const gqlCtx = GqlExecutionContext.create(ctx);
      const req = gqlCtx.getContext().request;
      
      const token = this.authService.getTokenFromRequestAuthHeader(req);

      const decoded = jwt.verify(token, 'fzefjfosfoizefhjeigjeziogj');

      const {
        accesstoken,
        refreshtoken,
        user_id,
        count,
      } = decoded as JwtFromRequest;

      //Now decode our accesstoken & refreshtokens

      if (!user_id) {
        throw new HttpException('No user id found', HttpStatus.FORBIDDEN);
      }

      if (!accesstoken) {
        throw new HttpException(
          'No accesstoken found, please login again',
          HttpStatus.FORBIDDEN,
        );
      }
      // ACCESS TOKEN //
      try {
        //checking if it's expired
        const decodedAccess = jwt.verify(
          accesstoken,
          'fzefjfosfoizefhjeigjeziogj',
        ) as any;
        req.user = decodedAccess.userId;
        return true;
      } catch {
        console.log('Accesstoken expired');
      }

      if (!refreshtoken) {
        throw new HttpException(
          'No refreshtoken found please login again',
          HttpStatus.FORBIDDEN,
        );
      }
      //REFRESH TOKEN//
      try {
        const decodedRefresh = jwt.verify(
          refreshtoken,
          'fzefjfosfoizefhjeigjeziogj',
        ) as any;
        if (decodedRefresh) req.user = decodedRefresh.userId;
        //Refresh is active
        //Checking count, if the same grant new access and refresh token if not give error, because someone might have resetted their pass
        this.authService.checkIfCountAligns(user_id, count) as any;
      } catch (err) {
        console.log('Refresh expired');
        throw new HttpException(
          'Refreshtoken is expired please login again',
          HttpStatus.FORBIDDEN,
        );
      }

    

      return true;
    } catch (err) {
      console.log('[GqlJwtGuard] caught err:', err);
      return false;
    }
  }
}
