import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { addgetContact } from './reduseContact';
import { filter } from './reduseFilter';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const rootReducer = combineReducers({
  addgetContact,
  filter,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['addgetContact'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
