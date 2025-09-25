import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Todo = {
    todo_id: number,
    content: string,
    status: string,
    create_date: string,
    start_date: string,
    finish_date: string
}

type Todos = {
    list_id: number;
    todos: Todo[];
    slug: string;
};

type TodosState = {
    todos: Todos[];
    loading: boolean;
    error: string | null;
};

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null,
};

// API-dən data gətirmək üçün async thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (slug: string) => {
    const res = await fetch(`https://taskwar.vercel.app/todos/?slug=${slug}`);
    return (await res.json()) as Todos[];
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Xəta baş verdi";
            });
    },
});

export default todosSlice.reducer;
