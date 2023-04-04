import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rankSlice from './rank-slice';

const persistConfig = {
    key: 'persist-key',
    storage
}

const reducer = combineReducers({
    rank: rankSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],}
      })
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
export {persistor}