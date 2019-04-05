import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import BookCard from '../components/BookCard';

const formatBookResults = googleApiResults => {
  const bookArray = [];

  googleApiResults.map(book => {

    const formattedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors
        ? book.volumeInfo.authors
        : ['No Author Listed.'],
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : 'No Description Listed.',
      googleBookId: book.id,
      thumbnail: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png',
      link: book.volumeInfo.canonicalVolumeLink,
      pageCount: book.volumeInfo.pageCount,
      subtitle: book.volumeInfo.subtitle,
      publishedDate: book.volumeInfo.publishedDate
    };

    bookArray.push(formattedBook);
    return bookArray
  });
  return bookArray;
};

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ''
  };

  // Save a book to the database.
  saveBook = event => {

    const chosenBook = this.state.results.find(book => book.googleBookId === event.target.id);

    const newSave = {
      title: chosenBook.title,
      authors: chosenBook.authors,
      description: chosenBook.description,
      googleBookId: chosenBook.googleBookId,
      thumbnail: chosenBook.thumbnail,
      link: chosenBook.link,
      pageCount: chosenBook.pageCount,
      subtitle: chosenBook.subtitle,
      publishedDate: chosenBook.publishedDate
    };

    API.saveBook(newSave)
      .then(res => {
        console.log(res.status, res.statusText);
        this.props.alert.show('Book Saved!', {type: 'success'})
      })
      .catch(err => {
        console.log(err);
        this.props.alert.show('Sorry, There was a problem...', {
          type: 'error',
          timeout: 5000
        })
      })
  };

  // Event handlers.
  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search)
      .then(res => {
        const formattedArray = formatBookResults(res.data.items);
        this.setState({results: formattedArray});
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Search"
          image={require('../img/library.jpg')}
        />
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <BookCard
          books={this.state.results}
          buttonAction={this.saveBook}
          buttonType="btn btn-success mt-2"
          buttonText="Save Book"
        />
      </div>
    );
  }
}

export default withAlert(Search);