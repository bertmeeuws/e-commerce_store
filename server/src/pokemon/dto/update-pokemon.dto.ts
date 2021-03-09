import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('UpdatePokemonInput')
export class UpdatePokemonDto {
  @Field() readonly id?: string;
  @Field() readonly name?: string;
  @Field() readonly type?: string;
  @Field() readonly pokedex?: number;
}
