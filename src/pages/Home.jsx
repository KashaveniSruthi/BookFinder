import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import Loader from "../components/Loader";
import "./Home.css";

function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* Hero / Welcome Section */}
      <header className="hero-section">
        <h1>Welcome to BookFinder 📚</h1>
        <p>
          Discover millions of books from the Open Library. Search by title, author, or subject 
          and explore detailed information about each book. Whether you’re a student, a researcher, 
          or just a curious reader — BookFinder helps you find your next read in seconds!
        </p>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <h2>Start Your Search</h2>
        <p>Type in a book title, author name, or keyword and hit "Search".</p>
        <SearchBar onSearch={searchBooks} />
      </section>

      {/* Results Section */}
      <section className="results-section">
        <h2>Results</h2>
        {loading ? (
          <Loader />
        ) : books.length > 0 ? (
          <BookList books={books} onSelectBook={setSelectedBook} />
        ) : (
          <p className="no-results">No results yet. Try searching above!</p>
        )}
      </section>

      {/* Book Details Modal */}
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      {/* Extra Info / How It Works */}
      <section className="info-section">
        <h2>How BookFinder Works</h2>
        <ul>
          <li>🔎 Search across millions of books with keywords or author names.</li>
          <li>📖 Click on any book to see more details, including author and publication year.</li>
          <li>⭐ Save your favorites (coming soon!) to build your personal library.</li>
          <li>🌍 Powered by <a href="https://openlibrary.org/" target="_blank" rel="noreferrer">Open Library API</a>.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
