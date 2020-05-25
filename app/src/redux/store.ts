import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"

import flashCardsReducer from "../features/flashCardSlice"

const store = configureStore({
    reducer: combineReducers({
        flashCards: flashCardsReducer
    }),
    middleware: getDefaultMiddleware(),
    devTools: true
});

export default store;
export type RootState = ReturnType<typeof store.getState>
