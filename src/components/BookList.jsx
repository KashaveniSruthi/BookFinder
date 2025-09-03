import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

function BookList({ books, onSelectBook }) {
  if (books.length === 0) return <p>No books found.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onClick={() => onSelectBook(book)} />
      ))}
    </div>
  );
}

export default BookList;
