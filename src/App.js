import React, { Component } from 'react';
import GetPosts from './components/Posts/Posts';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>POSTS</h1>
        <GetPosts/>
      </div>
    );
  }
}

export default App;