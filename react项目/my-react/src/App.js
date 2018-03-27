import React, { Component } from 'react';
import {View as Header} from './components/header/'
import './style.css'
import './reset.css'
class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <Header/>
      </div>
    );
  }
}

export default App;
