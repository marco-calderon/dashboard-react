import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/app.reducer";

export const store = configureStore({ reducer: rootReducer });