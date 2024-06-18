import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonScroll } from '../../api';
import { pokemonUpdated } from '../reducers';

export const countUpdated = createAsyncThunk(
  'countUpdated',
  async (count: string, { dispatch }) => {
    const pokemon = await pokemonScroll(count);

    dispatch(pokemonUpdated(pokemon));

    return count;
  }
);
