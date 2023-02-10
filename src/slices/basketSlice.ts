import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: any, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: any, action) => {
      const index = state.items.findIndex((basketItem: any) => {
        return basketItem.id === action.payload;
      });

      let newBasket = [...state.items];

      console.log(index);
      if (index >= 0) {
        // Item exists in the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id})`);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: any) => state.basket.items;

export default basketSlice.reducer;
