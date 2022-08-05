import BookCard from './BookCard';
import './BooksList.css';

function BooksList({ books, isLoading }) {
  return (
    <>
      {isLoading ? (<div id="loading"></div>) :
      (<div className="books">
        {books && books.length > 0 ? 
          books.map((book, index) => (
              <BookCard
                key={index}
                book={book}
              />
            )) 
          :
          "No books to show"
        }
      </div>)}
    </>
  )
}

export default BooksList
