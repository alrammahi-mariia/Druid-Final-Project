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

export const fetchFullPageContent = createAsyncThunk(
  "content/fetchFullPageContent",
  async ({ contentType, includedFields }, thunkAPI) => {
    try {
      const data = await fetchPageData(contentType, includedFields);
      return {
        mainData: data.data,
        includedData: processIncludedData(data.included),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {}, // For fetchPageContent results
  mainData: null, // For fetchFullPageContent results
  includedData: null, // For fetchFullPageContent results
  loading: false,
  error: null,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    resetContentState: (state) => {
      state.data = {};
      state.mainData = null;
      state.includedData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchPageContent cases
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
        state.error = null;
      })
      .addCase(fetchPageContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Error fetching page content:", action.payload);
      })
      // fetchFullPageContent cases
      .addCase(fetchFullPageContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFullPageContent.fulfilled, (state, action) => {
        state.loading = false;
        state.mainData = action.payload.mainData;
        state.includedData = action.payload.includedData;
        state.error = null;
      })
      .addCase(fetchFullPageContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.mainData = null;
        state.includedData = null;
        console.error("Error fetching full page content:", action.payload);
      });
  },
});

export const { resetContentState } = contentSlice.actions;
export default contentSlice.reducer;
