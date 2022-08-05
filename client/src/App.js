import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetail';
import Header from './components/Header';
import AddBook from './components/AddBook';
import Favorites from './pages/Favorites';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`/books`)
        .then(response => response.json())
        .then(data => {
          setBooks(data);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<BooksList books={books} isLoading={isLoading} />} />
          <Route path="/books/:bookId" element={<BookDetail currentUser={user} />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/favorites" element={<Favorites user={user} />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </div>
    </div>
  );
}

export default App;
