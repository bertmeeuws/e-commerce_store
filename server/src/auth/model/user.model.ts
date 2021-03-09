import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('UserInput')
export class UserModel {
  @Field((type) => Int) readonly id: number;

  @Field() readonly email: string;

  @Field() readonly surname: string;

  @Field() readonly name: string;

  @Field() readonly password: string;
}
