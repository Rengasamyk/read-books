import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelves from "./Shelves";
//import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Books = () => {
    const [fetchedBooks, setFetchedBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const response = await BooksAPI.getAll();
			if (response.error) {
				console.log("Network Error");
			}
			setFetchedBooks(response);
		};
		getBooks();
	}, []);

	const changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		if (shelf === "none") {
			setFetchedBooks(fetchedBooks.filter((b) => b.id !== book.id));
		} else {
			book.shelf = shelf;
			setFetchedBooks(
				fetchedBooks.filter((b) => b.id !== book.id).concat(book)
			);
		}
	};
  return (
      <div>
          
      <Shelves books={fetchedBooks} onShelfChange={changeBookShelf} />
    </div>
  )
}

export default Books
