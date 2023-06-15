import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkstatus: (state) => ({ ...state, status: 'Under Construction' }),
  },
});

export const { checkstatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
