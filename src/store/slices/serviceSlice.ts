import api from "@/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedServiceSlug: "",
};

// Async thunk for logging in
export const getProgramServices = createAsyncThunk(
  "service/basic",
  async (payload: any, { rejectWithValue }) => {
    try {
      let response = await api.services.getProgramServices(payload);
      if (response.status === 201) {
        return response.data;
      } else {
        return rejectWithValue(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const serviceSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedServiceSlug = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(login.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(login.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // })
    // .addCase(login.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
  },
});

export const { setSelectedService } = serviceSlice.actions;

export default serviceSlice.reducer;
