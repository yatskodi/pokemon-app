import { createFileRoute } from '@tanstack/react-router';
import { PokemonGrid } from '../components/PokemonGrid';
import { usePokemon, store } from '../store';
import { pokemonUpdated } from '../store/reducers';
import { getPokemons } from '../api';

export const Route = createFileRoute('/')({
  component: Index,
  beforeLoad: async () => {
    store.dispatch(pokemonUpdated(await getPokemons()));
  },
});

export default function Index() {
  const pokemons = usePokemon();

  return <PokemonGrid pokemons={pokemons || []} />;
}
