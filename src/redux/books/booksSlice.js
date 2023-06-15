import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const generateUniqueId = () => new Date().getTime().toString(36);

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const bookObject = {
        item_id: generateUniqueId(),
        title,
        author,
        category: 'Fiction', // Modify or access the category as per your requirement
      };
      state.books.push(bookObject);
    },
    removeBook: (state, action) => {
      const idToRemove = action.payload.id;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== idToRemove),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
