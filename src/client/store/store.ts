import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import pokemonSlice, { pokemonUpdated } from './reducers';
import { pokemonSearch } from '../api';

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
  predicate: (_action, currentState, previousState) => {
    return currentState.pokemon.search !== previousState.pokemon.search;
  },
  effect: async (_action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await listenerApi.delay(250);
    const pokemon = await pokemonSearch(listenerApi.getState().pokemon.search);
    listenerApi.dispatch(pokemonUpdated(pokemon));
  },
});

export const useSearch = () => useAppSelector((state) => state.pokemon.search);
export const usePokemon = () =>
  useAppSelector((state) => state.pokemon.pokemon);
export const useCount = () => useAppSelector((state) => state.pokemon.count);
