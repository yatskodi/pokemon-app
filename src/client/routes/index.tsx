import { createFileRoute } from '@tanstack/react-router';
import { MainContaner } from '../components';
import { usePokemon, store, pokemonUpdated } from '../store';
import { getPokemons } from '../api';

export const Route = createFileRoute('/')({
  component: Index,
  beforeLoad: async () => {
    // using store directly may be an anti-pattert
    store.dispatch(pokemonUpdated(await getPokemons()));
  },
});

export default function Index() {
  const pokemons = usePokemon();

  return <MainContaner pokemons={pokemons || []} />;
}
