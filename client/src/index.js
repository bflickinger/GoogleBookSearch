import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker';

// Alert Default Options
const options = {
  position: 'top center',
  timeout: 3000,
  offset: '30px',
  transition: 'scale'
};

// Wrapping the Application in the Alert Provider
class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App/>
      </AlertProvider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

