import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pokemon {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  type: string;

  @Field()
  pokedex: number;
}
