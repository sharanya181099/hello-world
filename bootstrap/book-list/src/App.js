import React, { useState } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState('');
  const [books, setBooks] = useState([]);

  const addBook = () => {
    if (book.trim()) {
      setBooks([...books, book.trim()]);
      setBook('');
    }
  };
  return (
    <div className="app-container">
    <div className="card">
    <h1 className="title">List of Books</h1>

      <div className="input-group">
        <input
          className="book-input"
          placeholder="Enter book title"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          data-testid="book-input-id"
        />
        <button
          className="add-button"
          onClick={addBook}
          data-testid="add-button-id"
        >
          Add Book
        </button>
      </div>

      <ul className="book-list" data-testid="book-list-id">
        {books.map((b, i) => (
          <li key={i} className="book-item">
            {b}
          </li>
        ))}
      </ul>
  </div>
</div>
  );
}
export default App;
