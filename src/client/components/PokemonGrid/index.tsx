import { Pokemon } from '../../types';
import { PokemonSearch, PokemonCard } from '../';
import styled from 'styled-components';

type PokemonProps = {
  pokemons: Pokemon[];
};

export const PokemonGrid = ({ pokemons }: PokemonProps) => (
  <>
    <h1>Hi there</h1>
    <p>Type for search your favorite one</p>
    <PokemonSearch />
    <Grid>
      {pokemons.map((pokemon: Pokemon) => {
        return (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        );
      })}
    </Grid>
  </>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 50px auto 0;
`;
