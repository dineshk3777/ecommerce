import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../counterSlice/counterSlice'
import cartSlice from '../cartSlice/cartSlice'

export const store= configureStore({
  reducer:{
  counter:counterSlice,
  cart:cartSlice
  }
})