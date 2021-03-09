import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('PokemonInput')
export class CreatePokemonDto {
  @Field() readonly id: string;
  @Field() readonly name: string;
  @Field() readonly type: string;
  @Field() readonly pokedex: number;
}
