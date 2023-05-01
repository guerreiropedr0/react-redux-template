import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch('http://localhost:3000/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors);
  }

  return await response.json();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.errors = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.errors = action.error.message.split(',');
      })
  },
});


export default authSlice.reducer;
