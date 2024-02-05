import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import isUserReducer from "../features/user/isUserSlice"
import userSlice from "../features/user/userSlice";


export const store = configureStore({
  reducer: {
    isUser: isUserReducer,
    user: userSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
