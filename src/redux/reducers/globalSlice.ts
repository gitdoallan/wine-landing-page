import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    f: [],
  },
  reducers: {},
});

export default globalSlice.reducer;
