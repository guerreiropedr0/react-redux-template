import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../app/tokenManager';

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

  setToken(response.headers.get("Authorization"));
  return await response.json();
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.log(errorData);
    throw new Error(errorData);
  }

  setToken(response.headers.get("Authorization"));
  return await response.json();
})

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

      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.errors = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.errors = action.error.message.split(',');
      })
  },
});


export default authSlice.reducer;
