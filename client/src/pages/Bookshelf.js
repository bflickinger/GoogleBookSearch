import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';

class Bookshelf extends Component {
  state = { books: [] };

  // Hit thie API routes or the MongoDB to retrieve books for the bookshelf
  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err))
  };

  // Delete a specific book
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.loadBookshelf()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Bookshelf"
          image={require('../img/blurry.png')}
        />
        <BookCard
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Book"
        />
      </div>
    )
  }
}

export default Bookshelf;