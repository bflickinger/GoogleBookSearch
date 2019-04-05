import React from 'react';
import './style.css';

//BookCard for both Search and Bookshelf
function BookCard(props) {
  return (
    <div className="card-columns">
      {props.books.map(book => (
        <div className="card"
          key={
            book._id
              ? book._id
              : book.googleBookId
          }>
          <div className="card-body">
            <h5 className="card-title">{book.title.substring(0, 28)}</h5>
            <div className="media">
              <img src={book.thumbnail}
                className="align-self-center mr-3" alt="testing" />
              <div className="media-body">
                <h6 className="mt-0">{book.authors.join(', ')}</h6>
                <p className="mb-0">{book.description.substring(0, 50)}</p>
                <p className="mb-0">
                  <small className="text-muted">{book.pageCount} pages.</small>
                </p>
                <p className="mb-2">
                  <small className="text-muted">Published: {book.publishedDate}</small>
                </p>
              </div>
            </div>
            <div className="card-footer">
              <div className="row justify-content-md-center mb-auto">
                <a className="btn btn-info mt-auto" href={book.link} target="_blank"
                  rel="noopener noreferrer">View Book</a>
                <button className={props.buttonType}
                  onClick={props.buttonAction}
                  id={
                    book._id
                      ? book._id
                      : book.googleBookId
                  }
                >
                  {props.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookCard;