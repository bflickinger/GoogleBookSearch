import React from 'react';

function Jumbotron(props) {
  return (
    <div className="container mt-4">
      <div className="jumbotron text-center text-white" style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', height: props.height}}>
        <h1 className="display-4 title">{props.title}</h1>
      </div>
    </div>
  )
}

export default Jumbotron;