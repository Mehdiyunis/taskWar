import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Lists = {
    list_id: number;
    list_title: string;
    slug: string;
};

type ListsState = {
    lists: Lists[];
    loading: boolean;
    error: string | null;
};

const initialState: ListsState = {
    lists: [],
    loading: false,
    error: null,
};

// API-dən data gətirmək üçün async thunk
export const fetchLists = createAsyncThunk("lists/fetchLists", async () => {
    const res = await fetch("https://taskwar.vercel.app/todoslists");
    return (await res.json()) as Lists[];
});

// export const postLists = createAsyncThunk("lists/fetchLists", async () => {
//     const res = await fetch("https://taskwar.vercel.app/todoslists");
//     return (await res.json()) as Lists[];
// });

const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLists.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLists.fulfilled, (state, action) => {
                state.loading = false;
                state.lists = action.payload;
            })
            .addCase(fetchLists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Xəta baş verdi";
            });
    },
});

export default listsSlice.reducer;
