import { Pokemon } from '../../types';
import { PokemonSearch, PokemonGrid, PokemonLoadMore } from '..';

type Props = {
  pokemons: Pokemon[];
};

export const MainContaner = ({ pokemons }: Props) => {
  return (
    <>
      <h1>Hi there</h1>
      <p>Type for search your favorite one</p>
      <PokemonSearch />
      <PokemonGrid pokemons={pokemons || []} />
      <PokemonLoadMore />
    </>
  );
};
