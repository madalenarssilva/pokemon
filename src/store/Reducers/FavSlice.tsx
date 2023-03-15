import { createSlice } from "@reduxjs/toolkit";
import { Favorites } from "../../types/ReduxTypes";

export const initialState: Favorites = {
  favItems: [],
};

const FavSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav(prevState, action) {
      const newFav = action.payload;

      const existingFav = prevState.favItems.find(
        (item) => item.name === newFav.name
      );
      if (!existingFav) {
        prevState.favItems.push({
          name: newFav.name,
          url: newFav.url,
        });
        //localStorage.setItem("pokemons", JSON.stringify(prevState.favItems));
      }
      console.log(prevState.favItems[0].name);
    },
    removeFav(prevState, action) {
      const name = action.payload;

      prevState.favItems = prevState.favItems.filter(
        (item) => item.name !== name
      );
    },
  },
});

export const FavActions = FavSlice.actions;
export default FavSlice.reducer;
