import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Lists = {
    list_id: number;
    list_title: string;
    slug: string;
};

type ListsState = {
    lists: Lists[];
    loadingList: boolean;
    loadingAddList: boolean;
    errorList: string | null;
    errorAddList: string | null;
};

const initialState: ListsState = {
    lists: [],
    loadingList: false,
    errorList: null,
    loadingAddList: false,
    errorAddList: null,
};

// API-dən data gətirmək üçün async thunk
export const fetchLists = createAsyncThunk("lists/fetchLists", async () => {
    const res = await fetch("https://taskwar.vercel.app/todoslists");
    return (await res.json()) as Lists[];
});

// yeni list yarat post api
export const addTodoList = createAsyncThunk("todos/addTodo", async () => {
    const res = await fetch("https://taskwar.vercel.app/todoslists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            list_id: Date.now,
            list_title: "qaqa",
            slug: "qaqaq",
        }),
    });
    return await res.json();
}
);

const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLists.pending, (state) => {
                state.loadingList = true;
            })
            .addCase(fetchLists.fulfilled, (state, action) => {
                state.loadingList = false;
                state.lists = action.payload;
                console.log(action.payload)
            })
            .addCase(fetchLists.rejected, (state, action) => {
                state.loadingList = false;
                state.errorList = action.error.message || "Xəta baş verdi";
                console.log(action.error)
            });
        builder
            .addCase(addTodoList.pending, (state) => {
                state.loadingAddList = true;
            })
            .addCase(addTodoList.fulfilled, (state, action) => {
                state.loadingAddList = false;
                console.log(action.payload)
                state.lists.push(action.payload);
            })
            .addCase(addTodoList.rejected, (state, action) => {
                state.loadingAddList = false;
                console.log(action.error);
            });
    },
});

export default listsSlice.reducer;
