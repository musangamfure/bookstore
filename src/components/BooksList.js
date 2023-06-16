import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

function BooksList() {
  const BookList = useSelector((state) => state.bookstore.books);
  return (
    <>
      {BookList.map((book) => (
        <Books key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
    </>
  );
}

export default BooksList;
