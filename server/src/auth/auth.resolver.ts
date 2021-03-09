import { loginUserInput } from './dto/login-user.input';
import { createUserInput } from './dto/create-user.input';
import { UserModel } from './model/user.model';
import { AuthService } from './auth.service';
import { UserEntity } from './entity/user.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => UserEntity)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [UserModel])
  async users(): Promise<UserEntity[]> {
    return await this.authService.showAll();
  }

  @Mutation(() => UserModel)
  async registerUser(
    @Args('userRegister') data: createUserInput,
  ): Promise<any> {
    console.log('Inside resolver');
    return await this.authService.registerUser(data);
  }

  @Mutation(() => Boolean)
  async login(@Args('login') data: loginUserInput) {
    return await this.authService.login(data);
  }
}
