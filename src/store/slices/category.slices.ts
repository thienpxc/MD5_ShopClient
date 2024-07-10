import api from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Category{
    id?: number;
    name: string;
    image: string;
    status?: boolean;
}

export interface CategoryState {
 data: Category[] | null;
}
const initState: CategoryState = {
    data: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.data?.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findAllThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const findAllThunk = createAsyncThunk("category/findAll", async () => {
    const res = await api.category.findAllCategories();
    return res.data;
   
})

export const categoryReducer = categorySlice.reducer;

export const categoryActions = {
  ...categorySlice.actions,
  findAllThunk,
};
