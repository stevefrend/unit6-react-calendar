import React, { Component } from 'react';
import { render } from 'react-dom';
import Week from './WeekComponent/Week.jsx'

class App extends Component {


  

  render() {
    return (
      <div>
        <Week/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

