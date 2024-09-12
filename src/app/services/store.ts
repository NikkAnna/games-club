import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { gamesReducer } from '../slices/gamesSlice';

// import { ingredientsReducer } from '../slices/ingredientsSlice';
// import { ordersFeedReducer } from '../slices/feedSlice';
// import { userReducer } from '../slices/userSlice';

export const rootReducer = combineReducers({
  games: gamesReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
