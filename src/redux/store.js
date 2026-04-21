// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth-slice"; 
// import userReducer from "./features/user-slice"; 

// export const store = configureStore({
//   reducer: {
//     auth: authReducer, 
//     users: userReducer,
//   },

// });


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { apiSlice } from "./api/auth-api"; // මෙය අපි ඊළඟ පියවරේදී සාදන්නෙමු

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});