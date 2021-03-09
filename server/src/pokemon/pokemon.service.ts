import { inputPokemon } from './input/pokemon.input';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemon.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly PokemonRepository: Repository<PokemonEntity>,
  ) {}

  async createPokemon(data: inputPokemon): Promise<PokemonEntity> {
    let pokemon = new PokemonEntity();
    pokemon.name = data.name;
    pokemon.pokedex = data.pokedex;
    pokemon.type = data.type;

    await this.PokemonRepository.save(pokemon);

    return pokemon;
  }

  async getPokemons(): Promise<PokemonEntity[]> {
    return await this.PokemonRepository.find();
  }

  async getPokemon(id: string): Promise<PokemonEntity> {
    console.log('In service ' + id);
    return await this.PokemonRepository.findOne(id);
  }

  async updatePokemon(data: UpdatePokemonDto): Promise<PokemonEntity> {
    const { id, name, type, pokedex } = data;

    try {
      const pokemon = await this.PokemonRepository.findOneOrFail({ id });

      pokemon.name = name || pokemon.name;
      pokemon.pokedex = pokedex || pokemon.pokedex;
      pokemon.type = type || pokemon.type;

      await this.PokemonRepository.save(pokemon);

      return pokemon;
    } catch (err) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    //;
  }
}
