import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Books from './Books';

function BooksList() {
  const BookList = useSelector((state) => state.bookstore.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      {BookList.map((book) => (
        <Books key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
    </>
  );
}

export default BooksList;
