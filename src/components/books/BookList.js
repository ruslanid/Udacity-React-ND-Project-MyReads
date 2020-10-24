import React from "react";
import Book from "../book/Book";
import "./BookList.scss";

const BookList = ({ books, handleShelfChange }) => (
  <div className="BookList">
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} handleShelfChange={handleShelfChange} />
        </li>
      ))}
    </ol>
  </div>
);

export default BookList;
