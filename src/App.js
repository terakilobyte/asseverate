import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Don't Be Evil</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
