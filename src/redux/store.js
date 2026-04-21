import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { authApi } from "./api/auth-api"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});