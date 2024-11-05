import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPageData } from "../services/apiService";
import { processIncludedData } from "../utils/dataParser";

// Async thunk to fetch page data
export const fetchPageContent = createAsyncThunk(
  "content/fetchPageContent",
  async ({ contentType, includedFields }, thunkAPI) => {
    try {
      const data = await fetchPageData(contentType, includedFields);
      return processIncludedData(data.included);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    resetContentState: (state) => {
      state.data = {};
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageContent.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          ...state.data,
          [action.meta.arg.contentType]: action.payload,
        };
      })
      .addCase(fetchPageContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContentState } = contentSlice.actions;
export default contentSlice.reducer;
