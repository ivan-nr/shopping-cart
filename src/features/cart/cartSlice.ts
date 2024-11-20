import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  category: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const initialState: { items: CartItem[] } = {
  items: [
    {
      id: 1,
      name: "Blue denim shirt",
      category: "SHIRT / BLUE",
      size: "SIZE: M",
      price: 17.99,
      quantity: 1,
      image: "/blue-denim.jpg",
    },
    {
      id: 2,
      name: "Red hoodie",
      category: "HOODIE / RED",
      size: "SIZE: M",
      price: 35.99,
      quantity: 1,
      image: "/red-hoodie.jpg",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    moveToWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  moveToWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
