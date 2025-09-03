import React, { useEffect, useState } from "react";
import "./BookDetails.css";
import loaderSvg from "../assets/images/loader.svg";

function BookDetails({ book, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!book) return;
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://openlibrary.org${book.key}.json`);
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error("Error fetching book details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [book]);

  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {loading && (
          <div className="loader-container">
            <img src={loaderSvg} alt="Loading details..." className="loader" />
          </div>
        )}

        {!loading && details && (
          <>
            <h2>{book.title}</h2>
            <p><strong>Authors:</strong> {book.author_name?.join(", ")}</p>
            <p><strong>First Published:</strong> {book.first_publish_year}</p>
            <p><strong>Subjects:</strong> {details.subjects?.slice(0, 8).join(", ")}</p>
            <p><strong>Description:</strong> 
              {details.description?.value || details.description || "No description available."}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
