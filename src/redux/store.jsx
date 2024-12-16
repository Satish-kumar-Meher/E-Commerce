// import { configureStore } from '@reduxjs/toolkit' 
// import { cartSlice } from './cartSlice'

// export const store = configureStore({
//   reducer: {
//     cart : cartSlice
//   },
// })

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the default export (cart reducer)

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer here
  },
});
