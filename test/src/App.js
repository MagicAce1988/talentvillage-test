import React, { Component } from 'react'
import './App.css'
import RightSide from './components/RightSide'

class App extends Component {
  render() {
    return (
      <div className="MyApp">
        <div className="Content">
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App
