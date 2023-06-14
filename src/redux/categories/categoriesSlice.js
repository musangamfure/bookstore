import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: 'Under construction',
  reducers: {
    // No action required as the initial state is already set
  },
});

export default categoriesSlice.reducer;
