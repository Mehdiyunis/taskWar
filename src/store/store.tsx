import { configureStore } from '@reduxjs/toolkit'
import todosListsReducer from './slices/todosListsSlice'

export const store = configureStore({
    reducer: {
        lists: todosListsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch