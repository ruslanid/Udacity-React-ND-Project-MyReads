import React from "react";
import { withRouter } from "react-router-dom";
import "./HomePage.scss";
import Bookshelf from "../../components/bookshelf/Bookshelf";

const HomePage = ({ books, history, handleShelfChange }) => {
  const bookshelves = {
    "Currently Reading": "currentlyReading",
    "Want To Read": "wantToRead",
    Read: "read",
  };

  return (
    <div className="HomePage">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {Object.keys(bookshelves).map((title) => (
          <Bookshelf
            key={title}
            title={title}
            shelfBooks={books.filter(
              (book) => book.shelf === bookshelves[title]
            )}
            handleShelfChange={handleShelfChange}
          />
        ))}
      </div>
      <div className="open-search">
        <button onClick={() => history.push("/search")}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default withRouter(HomePage);
