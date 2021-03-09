import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
@ObjectType('PokemonInput')
export class inputPokemon {
  //@Field() readonly id: string;
  @Field() readonly name: string;
  @Field() readonly type: string;
  @Field() readonly pokedex: number;
}
