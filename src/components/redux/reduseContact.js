import { createSlice } from '@reduxjs/toolkit';
const contactReducer = createSlice({
  name: 'addgetContact',

  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(a => a.id !== action.payload);
    },
  },
});

export const addgetContact = contactReducer.reducer;
export const { addContact, removeContact } = contactReducer.actions;
