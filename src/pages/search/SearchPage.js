import React from "react";
import { withRouter } from "react-router-dom";
import BookList from "../../components/books/BookList";
import "./SearchPage.scss";

const SearchPage = ({ history, searchQuery, updatedSearchResults, handleSearch, handleShelfChange }) => (
  <div className="SearchPage">
    <div className="search-books-bar">
      <button onClick={() => history.push("/")} />
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          autoFocus={true}
          onChange={handleSearch}
        />
      </div>
    </div>
    <div className="search-books-results">
      <BookList books={updatedSearchResults} handleShelfChange={handleShelfChange} />
    </div>
  </div>
);

export default withRouter(SearchPage);
