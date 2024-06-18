import { Pokemon } from '../../types';
import { PokemonCard } from '../';
import styled from 'styled-components';

type Props = {
  pokemons: Pokemon[];
};

export const PokemonGrid = ({ pokemons }: Props) => (
  <Grid>
    {pokemons.map((pokemon: Pokemon) => {
      return (
        <div key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      );
    })}
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 50px auto 0;
`;
