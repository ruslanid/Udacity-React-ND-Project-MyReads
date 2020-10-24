import React from "react";
import "./Book.scss";

const Book = ({ book, handleShelfChange }) => {
  const { imageLinks, title, authors, shelf } = book;

  return (
    <div className="Book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ""})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelf ? shelf : "none"}
            onChange={(event) => handleShelfChange(event.target.value, book)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors || "Author unknown"}</div>
    </div>
  );
};

export default Book;
