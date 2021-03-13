import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

/**
 * This decorator is used to inject @CurrentUser into methods
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    if (ctx.getType<GqlContextType>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(ctx);
      return gqlContext.getContext().req.user;
    }
    return ctx.switchToHttp().getRequest().user;
  },
);
