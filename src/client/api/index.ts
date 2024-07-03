export const API_HOST = import.meta.env.VITE_API_HOST;

export async function getPokemons() {
  const res = await fetch(`${API_HOST}/api`);
  return await res.json();
}

export async function getPokemonDetail(id: number) {
  const res = await fetch(`${API_HOST}/api/${id}`);
  return await res.json();
}

export async function pokemonSearch(search: string) {
  const res = await fetch(`${API_HOST}/api?search=${search}`);
  return await res.json();
}

export async function pokemonScroll(scroll: string) {
  const res = await fetch(`${API_HOST}/api?scroll=${scroll}`);
  return await res.json();
}
