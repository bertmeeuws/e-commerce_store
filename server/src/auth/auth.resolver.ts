import { loginUserInput } from './dto/login-user.input';
import { createUserInput } from './dto/create-user.input';
import { UserModel } from './model/user.model';
import { AuthService } from './auth.service';
import { UserEntity } from './entity/user.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import SECRET from './constants/secret';

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

  @Mutation(() => String)
  async registerUser(
    @Args('userRegister') data: createUserInput,
  ): Promise<String> {
    console.log('Inside resolver');
    const {
      accessToken,
      refreshToken,
      id,
      count,
    } = await this.authService.registerUser(data);

    console.log(accessToken + ' ' + refreshToken + ' ' + id);

    const token = jwt.sign(
      {
        accesstoken: accessToken,
        refreshtoken: refreshToken,
        user_id: id,
        count,
      },
      'fzefjfosfoizefhjeigjeziogj',
    );
    //token versturen
    return token;
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
