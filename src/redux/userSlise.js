import { createSlice } from '@reduxjs/toolkit';

const userReduce = createSlice({
  name: 'userCreator',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = state.users.filter(a => a.id !== action.payload);
    },
  },
});
export const users = userReduce.reducer;
export const { addUser, removeUser } = userReduce.actions;
