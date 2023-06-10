import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    return res?.json();
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default todoSlice.reducer; 