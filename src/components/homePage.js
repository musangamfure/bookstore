import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

function Home() {
  return (
    <>
      <div className="home">
        <BooksList />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
