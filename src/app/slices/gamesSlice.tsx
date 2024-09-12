import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';

import { TGame } from '../../entity/game-card/ui/game-card';
import { getGamesApi } from '../../shared/api/games-api';
import { v4 as uuidv4 } from 'uuid';

// import {
//   getOrderByNumberApi,
//   getOrdersApi,
//   orderBurgerApi
// } from '../utils/burger-api';



export type TGameState = {
  games: TGame[];
  loader: boolean;
  error: string | undefined;
  gamesOnSelectedDate: TGame[] | null;
  
};

export const initialState: TGameState = {
  games: [],
  loader: false,
  error: '',
  gamesOnSelectedDate: null
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
    getGamesOnSelectedDate: {
      reducer: (state, action) => {
        const data = state.games.filter((game) => game.game.start_time === action.payload)
        if (data) {
        return data
        }
      }
    },
    // addMainsAndSaucesToOrder: {
    //   reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
    //     state.mainsAndSaucesIngr.push(action.payload);
    //   },
    //   prepare: (ingredient: TIngredient) => {
    //     const id = uuidv4();
    //     return { payload: { ...ingredient, id } };
    //   }
    // },
    // deleteIngredientInOrder: (
    //   state,
    //   action: PayloadAction<TConstructorIngredient>
    // ) => {
    //   state.mainsAndSaucesIngr = state.mainsAndSaucesIngr.filter(
    //     (i) => i.id !== action.payload.id
    //   );
    // },
    // resetJustDoneOrder: (state) => {
    //   state.justDoneOrder = null;
    // },
  },
  selectors: {
    // getComposedOrderIngredients: (state) =>
      // state.composedOrderIngredients || [],
    getGamesSelector: (state) => state.games,
    // getOrderMainAndSauces: (state) => state.mainsAndSaucesIngr,
    // getReadyOrders: (state) => state.readyOrders,
    // getLoader: (state) => state.loading,
    // getJustDoneOrder: (state) => state.justDoneOrder,
    // getOrderByNumber: (state) => state.orderByNumber
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
        console.log(state.games)
      })
  }
});

export const gamesReducer = gamesSlice.reducer;
export const {
  
} = gamesSlice.actions;
export const {
  getGamesSelector,

} = gamesSlice.selectors;
