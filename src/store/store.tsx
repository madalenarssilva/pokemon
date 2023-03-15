import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "./Reducers/FavSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const Favorite = { fav: FavSlice };

const persistedReducer = persistReducer(persistConfig, FavSlice);

const store = configureStore({
  //reducer: { fav: FavSlice },
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export const persistor = persistStore(store);
