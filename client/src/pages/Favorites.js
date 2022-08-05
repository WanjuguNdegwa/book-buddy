import React, { useState, useEffect } from 'react'
import BooksList from '../components/BooksList';

function Favorites({ user }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`/users/${user.id}/favorites`).then((r) => {
      if (r.ok) {
        r.json().then((books) => setBooks(books));
        setIsLoading(false)
      }
    });
  }, [user]);

  return (
    <BooksList books={books} isLoading={isLoading} />
  )
}

export default Favorites
