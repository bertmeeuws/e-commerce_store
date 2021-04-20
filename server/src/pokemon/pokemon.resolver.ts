import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PokemonEntity } from './pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { inputPokemon } from './input/pokemon.input';

@Resolver(() => PokemonEntity)
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query(() => [CreatePokemonDto])
  async pokemon() {
    console.log('Get pokemons');
    return this.pokemonService.getPokemons();
  }

  @Query(() => CreatePokemonDto)
  async getPokemon(@Args('id', { type: () => String }) id: string) {
    console.log('Get pokemon by id');
    return this.pokemonService.getPokemon(id);
  }

  @Mutation(() => CreatePokemonDto)
  async createPokemon(@Args('data') data: inputPokemon) {
    console.log('Create pokemon');
    return this.pokemonService.createPokemon(data);
  }

  @Mutation(() => UpdatePokemonDto)
  async updatePokemon(@Args('data') data: inputPokemon) {
    console.log('Update pokemon');
    return this.pokemonService.updatePokemon(data);
  }

  @Query(() => String)
  getString() {
    return 'string';
  }
}
