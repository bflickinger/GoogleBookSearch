import React from 'react'
import Jumbotron from '../components/Jumbotron';

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        image={require('../img/404.png')}
        height={'500px'}
      />
    </div>
  )
}

export default NoMatch;