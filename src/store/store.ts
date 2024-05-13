import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '@api/api';
import table1PageReducer from "@pages/Public/Table1Page/table1PageSlice"



export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    table1Page: table1PageReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch