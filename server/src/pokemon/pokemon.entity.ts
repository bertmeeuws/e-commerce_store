import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pokemon')
export class PokemonEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 500 })
  name: string;

  @Column('varchar', { length: 500 })
  type: string;

  @Column('numeric') pokedex: number;
}
