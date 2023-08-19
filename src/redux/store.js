import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "redux/productsAPI";
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'basketStorage',
    storage,
    blacklist: [productsApi.reducer, filterReducer],
}
const rootReducer = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
    products: [productsApi.reducer],
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        allReducer: persistedReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
            }
        }),
        productsApi.middleware,
    ]
},
);

setupListeners(store.dispatch);

export const persistor = persistStore(store);