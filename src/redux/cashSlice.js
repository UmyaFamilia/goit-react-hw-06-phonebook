import { createSlice } from '@reduxjs/toolkit';

const toolkidReducer = createSlice({
  name: 'toolkidReduser',
  initialState: {
    count: 0,
  },
  reducers: {
    addCash(state, action) {
      state.count += action.payload;
    },
    getCash(state, action) {
      state.count -= action.payload;
    },
  },
});

export const cashReduser = toolkidReducer.reducer;
export const { addCash, getCash } = toolkidReducer.actions;
