import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('PokemonUpdateInput')
export class updateInput {
  @Field() readonly id: string;
  @Field() readonly name?: string;
  @Field() readonly type?: string;
  @Field() readonly pokedex?: number;
}
