import React, { Component } from 'react'
import Nav from './nav/Nav'
import Body from './body/Body'

class App extends Component {
  render() {
    return (
      <div id="main">
        <Nav />
        <Body />
      </div>
    )
  }
}

export default App