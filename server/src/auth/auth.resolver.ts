import { CreateUser } from './interface/jwt.interface';
import { loginUserInput } from './dto/login-user.input';
import { createUserInput } from './dto/create-user.input';
import { UserModel } from './model/user.model';
import { AuthService } from './auth.service';
import { UserEntity } from './entity/user.entity';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  GraphQLExecutionContext,
  GqlExecutionContext,
} from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import SECRET from './constants/secret';
import { GraphQLJwtRoleRequired } from './roles.decorator';
import { CurrentUser } from './current-user.decorator';
import { createTokens } from './utils';

/*
Login → server
Server geeft een refresh en access token + userId en count terug

Bij elke request → server
Als access verlopen is, maar refresh nog oké. Sturen we naar de server, de server fetch the user via ons id die ook in onze JWT zit.
Vergelijkt de count van de jwt en de count van de database als deze hetzelfde is, dan is refresh valid.
Nieuwe access token terug sturen

Als het niet hetzelfde is, dan moeten ze opnieuw inloggen

Forgot password is increment de count, en bij check van de count zal deze negatief zijn en worden alle requests false weergegeven.
Daarna moet de persoon opnieuw inloggen om weer een valid token te krijgen. Aan de count kan je ook zien hoeveel keer een JWT invalid is geweest.
*/

@Resolver(() => UserEntity)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [UserModel])
  async users(): Promise<UserEntity[]> {
    return await this.authService.showAll();
  }

  /*
  @Mutation(() => Boolean)
  async forgotPassword(
    @Args('forgotPassword') user: CreateUser,
  ): Promise<Boolean> {
    return true;
  }

  */

  @Mutation(() => Boolean)
  async registerUser(
    @Context() context: any,
    @Args('userRegister') data: createUserInput,
  ): Promise<Boolean> {
    const { id, count } = await this.authService.registerUser(data);

    const { accessToken, refreshToken } = createTokens(id);

    console.log(accessToken + ' ' + refreshToken + ' ' + id);

    const token = jwt.sign(
      {
        accesstoken: accessToken,
        refreshtoken: refreshToken,
        user_id: id,
        count,
      },
      SECRET.mainToken,
    );

    context.response.cookie('new', 'hiya', { httpOnly: true });

    //const gqlCtx = GqlExecutionContext.create(context);

    // console.log(gqlCtx.getContext().request);

    console.log(context.request);

    console.log('Token created and sent back');

    return true;
  }

  @Query(() => String)
  @GraphQLJwtRoleRequired()
  testQuery(@CurrentUser() user: any) {
    return `User test: ${user}`;
  }

  @Mutation(() => String)
  async login(@Args('login') data: loginUserInput) {
    const {
      accessToken,
      refreshToken,
      id,
      count,
    } = await this.authService.login(data);

    if (!accessToken || !refreshToken) {
      throw new BadRequestException('Information incorrect');
    }

    const token = jwt.sign(
      {
        accesstoken: accessToken,
        refreshtoken: refreshToken,
        user_id: id,
        count,
      },
      'fzefjfosfoizefhjeigjeziogj',
    );

    return token;
  }
}
