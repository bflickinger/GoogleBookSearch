import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Google Book Search
        </Link>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".nav-collapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/"
                className={window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"}>Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookshelf"
                className={window.location.pathname === "/bookshelf"
                  ? "nav-link active"
                  : "nav-link"}>Bookshelf</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index;