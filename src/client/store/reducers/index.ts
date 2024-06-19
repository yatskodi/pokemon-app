import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types';
import { countUpdated } from '../thunks';

interface PokemonState {
  search: string;
  pokemon: Pokemon[];
  loading: boolean;
  count: number;
}

const initialState: PokemonState = {
  search: '',
  pokemon: [],
  loading: false,
  count: 20,
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
      state.count = action.payload?.length;
      state.pokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(countUpdated.fulfilled, (state, action) => {
      state.count = +action.payload;
    });
  },
});

export const { searchUpdated, pokemonUpdated, searchReset } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
