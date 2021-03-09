import { Field, InputType } from '@nestjs/graphql';

@InputType('loginUserInput')
export class loginUserInput {
  @Field() readonly email: string;
  @Field() readonly password: string;
}
