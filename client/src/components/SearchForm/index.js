import React from 'react';

function SearchForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-4">
          <form>
            <div className="form-group text-center">
              <label htmlFor="book-search">
                Search:
                </label>
              <input type="text"
                value={props.search}
                onChange={props.handleInputChange}
                className="form-control"
                id="book-search"
                placeholder="Enter your search term here..." />
            </div>
            <div className="text-center">
              <button type="submit"
                className="btn btn-dark"
                style={{ margin: "auto" }}
                onClick={props.handleFormSubmit}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;