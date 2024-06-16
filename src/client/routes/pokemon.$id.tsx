import { createFileRoute } from '@tanstack/react-router';
import { PokemonDetail } from '../components';
import { getPokemonDetail } from '../api';

export const Route = createFileRoute('/pokemon/$id')({
  component: Index,
  loader: async ({ params }) => {
    return getPokemonDetail(+params.id);
  },
});

export default function Index() {
  const pokemon = Route.useLoaderData();

  return <PokemonDetail pokemon={pokemon} />;
}
