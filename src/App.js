import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import Cities from './views/Cities';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={Home} exact />
          <Route path='/cities' component={Cities} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
