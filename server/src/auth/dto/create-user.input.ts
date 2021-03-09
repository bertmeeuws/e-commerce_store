import { Field, InputType } from '@nestjs/graphql';

@InputType('createUserInput')
export class createUserInput {
  @Field() readonly email: string;
  @Field() readonly surname: string;
  @Field() readonly name: string;
  @Field() readonly password: string;
}
