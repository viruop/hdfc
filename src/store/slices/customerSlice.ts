import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: null,
  token: null,
  programs: [],
  selectedProgram: null,
  services: [],
  loading: false,
  error: null,
};

const BASE_URL = "http://localhost:5006";
export const fetchCustomerPrograms = createAsyncThunk(
  "customer/fetchPrograms",
  async (email: any, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL + "/customers/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to fetch programs");

      return data.programs;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginCustomer = createAsyncThunk(
  "customer/login",
  async ({ email, programID, tenantId }: any, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL + "/customers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, programID, tenantId }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ** Customer Slice **
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    logout: (state) => {
      state.customer = null;
      state.token = null;
      state.programs = [];
      state.selectedProgram = null;
      state.services = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerPrograms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.programs = action.payload;
      })
      .addCase(fetchCustomerPrograms.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload;
        state.token = action.payload.token;
        state.selectedProgram = action.payload.program;
        state.services = action.payload.program.services;
      })
      .addCase(loginCustomer.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout } = customerSlice.actions;
export default customerSlice.reducer;

// ...existing code...
