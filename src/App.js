import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getAll, search, update } from "./api/BooksAPI";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getAllBooks = () => getAll().then((books) => setBooks(books));

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    search(query).then((res) => {
      res && res.constructor === Array
        ? setSearchResults(res)
        : setSearchResults([]);
    });
  };

  const handleShelfChange = (shelf, book) => {
    update(book, shelf).then((res) => getAllBooks());
  };

  const updatedSearchResults = searchResults.map((searchedBook) => {
    const foundBook = books.find((book) => book.id === searchedBook.id);
    return foundBook
      ? { ...searchedBook, shelf: foundBook.shelf }
      : searchedBook;
  });

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/search"
          component={() => (
            <SearchPage
              searchQuery={searchQuery}
              updatedSearchResults={updatedSearchResults}
              handleSearch={handleSearch}
              handleShelfChange={handleShelfChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          component={() => (
            <HomePage books={books} handleShelfChange={handleShelfChange} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
