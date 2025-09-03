import React from "react";
import "./BookCard.css";
import placeholderImg from "../assets/images/placeholder.png";

function BookCard({ book, onClick }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : placeholderImg;

  return (
    <div className="book-card" onClick={onClick}>
      <img src={cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(", ")}</p>
      <p>{book.first_publish_year}</p>
    </div>
  );
}

export default BookCard;
