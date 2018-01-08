import React, { Component } from "react"
import GameBar from "./components/GameBar"
import logo from "./logo.svg"
import asseverate from "./ASSEVERATE.png"
import "./App.css"
import Reboot from "material-ui/Reboot"

class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <div className="App">
          <header className="App-header">
            <img src={asseverate} className="App-logo" alt="logo" />
            <h1 className="App-title">Don't Be Evil</h1>
          </header>
          <GameBar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default App
