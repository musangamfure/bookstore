import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, removebook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

function Books({ id, title, author }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(removebook({ id }));
    await dispatch(deleteBook({ id }));
  };
  return (
    <>
      <div className="books__container">
        <div className="book__item">
          <div className="section__one">
            <h2>{title}</h2>
            <p>{author}</p>
            <div className="book__btn__section">
              <button type="button">Comments</button>
              <button onClick={handleDelete} type="button">
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="section__two">
            <div className="progress__bar">
              <CircularProgressbar value="65" text="65%" />
            </div>
            <div className="progres__text">
              <h2>65 %</h2>
              <p>Completed</p>
            </div>
          </div>
          <div className="section__three">
            <p>CURRENT CHAPTER</p>
            <h3>Chapter 17</h3>
            <button type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </>
  );
}

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
