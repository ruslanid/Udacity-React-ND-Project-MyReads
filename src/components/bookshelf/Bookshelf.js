import React from "react";
import BookList from "../books/BookList";
import "./Bookshelf.scss";

const Bookshelf = ({ title, shelfBooks, handleShelfChange }) => (
  <div className="Bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <BookList books={shelfBooks} handleShelfChange={handleShelfChange} />
  </div>
);

export default Bookshelf;
