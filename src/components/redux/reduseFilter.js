import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
  name: 'filterReducer',
  initialState: {
    filter: '',
  },
  reducers: {
    findNecessary(state, action) {
      state.filter = action.payload;
    },
  },
});
export const filter = filterReducer.reducer;
export const { findNecessary } = filterReducer.actions;
