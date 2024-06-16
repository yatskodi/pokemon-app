import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types';

interface PokemonState {
  search: string;
  pokemon: Pokemon[];
}

const initialState: PokemonState = {
  search: '',
  pokemon: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchUpdated: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    searchReset: (state) => {
      state.search = '';
    },
    pokemonUpdated: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { searchUpdated, pokemonUpdated, searchReset } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
