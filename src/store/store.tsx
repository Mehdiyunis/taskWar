import { configureStore } from '@reduxjs/toolkit'
import todosListsReducer from './slices/todosListsSlice'
import addListPopupReducer from './slices/addListPopupSlice'
import todosReducer from './slices/todosSlice'

export const store = configureStore({
    reducer: {
        lists: todosListsReducer,
        addList: addListPopupReducer,
        todos: todosReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch