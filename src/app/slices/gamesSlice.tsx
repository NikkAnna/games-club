import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { date } from '../../shared/model/date-convert';

import { TGame } from '../../shared/types/types';
import { getGamesApi } from '../../shared/api/games-api';
import { v4 as uuidv4 } from 'uuid';

export type TGameState = {
  games: TGame[];
  loader: boolean;
  error: string | undefined;
  selectedGames: TGame[] | null;
  // gameTypes: string[];
};

export const initialState: TGameState = {
  games: [],
  loader: false,
  error: '',
  selectedGames: null
};

export const getAllGamesThunk = createAsyncThunk(
  'games/getAll',
  async () => await getGamesApi()
);

// export const getReadyOrdersThunk = createAsyncThunk(
//   'order/get users ready',
//   async () => await getOrdersApi()
// );

// export const getOrderByNumberThunk = createAsyncThunk(
//   'order/get by number',
//   async (number: number) =>
//     await getOrderByNumberApi(number).then((data) => {
//       if (data.success) {
//         return data.orders.find((o) => o.number === number);
//       }
//     })
// );

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getSelectedGames: (
      state,
      action: PayloadAction<{ date: string; type: string }>
    ) => {
      if (
        action.payload.date === 'Все даты' &&
        action.payload.type === 'Все игры'
      ) {
        state.selectedGames = state.games;
      } else if (
        action.payload.date === 'Все даты' &&
        action.payload.type !== 'Все игры'
      ) {
        state.selectedGames = state.games.filter(
          (game) => game.game_kind.name === action.payload.type
        );
      } else if (
        action.payload.date !== 'Все даты' &&
        action.payload.type === 'Все игры'
      ) {
        state.selectedGames = state.games.filter(
          (game) => date(game.start_time).onlyDate === action.payload.date
        );
      } else if (
        action.payload.date !== 'Все даты' &&
        action.payload.type !== 'Все игры'
      ) {
        const selected = state.games.filter(
          (game) => date(game.start_time).onlyDate === action.payload.date
        );
        state.selectedGames = selected.filter(
          (game) => game.game_kind.name === action.payload.type
        );
      }
      // console.log(state.selectedGames)
    }

    // getGamesTypes: (state) => {
    //   const types = state.games.map((game) => game.game_kind.name)
    //   state.gameTypes = types.filter((t, index) => types.indexOf(t) === index);
    // }
  },
  selectors: {
    getGamesSelector: (state) => state.games,
    getSelectedGamesSelector: (state) => state.selectedGames,
    getGamesTypesSelector: (state) => {
      const types = state.games.map((game) => game.game_kind.name);
      return types.filter((t, index) => types.indexOf(t) === index);
    },
    getLoaderSelector: (state) => state.loader,
    getPlayersSelector: (state) => {
      const players = state.games.map((game) => {return game.registration_records })
      return players
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGamesThunk.pending, (state) => {
        state.loader = true;
        state.error = '';
      })
      .addCase(getAllGamesThunk.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(getAllGamesThunk.fulfilled, (state, action) => {
        state.loader = false;
        state.games = action.payload;
      });
  }
});

export const gamesReducer = gamesSlice.reducer;
export const { getSelectedGames } = gamesSlice.actions;
export const {
  getGamesSelector,
  getSelectedGamesSelector,
  getGamesTypesSelector,
  getLoaderSelector,
  getPlayersSelector
} = gamesSlice.selectors;
